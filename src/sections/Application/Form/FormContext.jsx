import { navigate } from 'gatsby';
import { useRef, useState, useEffect, useContext, createContext } from 'react';
import toast from 'react-hot-toast';
import { useGet } from 'restful-react';

import Combobox from '../../../components/Combobox';
import FileUpload from '../../../components/FileUpload';
import Input from '../../../components/Input';
import Loading from '../../../components/Loading';
import Select from '../../../components/Select';
import { fetchApi } from '../../../utils/ApiProvider';
import questionTypes from '../../../utils/enums/questionTypes';

const FormContext = createContext({});
const hasOptions = [questionTypes.SELECT];

function byOrder(a, b) {
  return a.order - b.order;
}

export function useForm() {
  return useContext(FormContext);
}

export function FormField({
  validator = () => {},
  fieldProps,
  forceType,
  index,
  id,
}) {
  const {
    setFormState,
    formState,
    formInfo,
    setIsSaving,
    isReady,
    isDisabled,
  } = useForm();
  const fieldInfo = id
    ? formInfo?.questions?.find((field) => field.id === id)
    : formInfo?.questions[index];

  const lastValue = useRef(formState.form[fieldInfo.id]);

  useEffect(() => {
    if (
      formState.form[fieldInfo.id] === lastValue.current ||
      formState.errors[fieldInfo.id] ||
      !formState.form[fieldInfo.id] ||
      isDisabled ||
      !isReady
    ) {
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setIsSaving((_state) => _state + 1);
      try {
        await fetchApi('/forms/hacker_application/response/answer_question', {
          signal: controller.signal,
          method: 'PUT',
          body: JSON.stringify({
            question: fieldInfo.id,
            ...(hasOptions.includes(fieldInfo.type)
              ? {
                  answerOptions: [
                    {
                      option: formState.form[fieldInfo.id],
                    },
                  ],
                }
              : {
                  answer:
                    formState.form[fieldInfo.id]?.id ??
                    formState.form[fieldInfo.id],
                }),
          }),
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          setFormState((_state) => ({
            ..._state,
            errors: {
              ..._state.errors,
              [fieldInfo.id]: err.detail.fieldErrors[0].message,
            },
          }));
        }
      } finally {
        window.setTimeout(() => {
          setIsSaving((_state) => _state - 1);
        }, 2000);
      }
    }, 1000);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [formState.errors[fieldInfo.id], formState.form[fieldInfo.id]]);

  // Props that all form elements share
  const defaultProps = {
    onBlur: () => {
      // Check required then custom validator
      const value = formState.form[fieldInfo.id];
      const checkRequired =
        fieldInfo.required && !value && 'This field is required';
      const isValid = validator(value, { fieldInfo, formState, formInfo });

      setFormState({
        ...formState,
        errors: {
          ...formState.errors,
          [fieldInfo.id]: checkRequired || isValid,
        },
      });
    },
    onChange: ({ target }) => {
      setFormState({
        ...formState,
        changed: {
          ...formState.changed,
          [fieldInfo.id]: true,
        },
        form: {
          ...formState.form,
          [fieldInfo.id]: target.value,
        },
        errors: {
          ...formState.errors,
          [fieldInfo.id]: false,
        },
      });
    },
    error: formState.errors[fieldInfo.id],
    value: formState.form[fieldInfo.id],
    placeholder: fieldInfo.placeholder,
    required: fieldInfo.required,
    label: fieldInfo.label,
    name: fieldInfo.id,
    ...fieldProps,
  };

  switch (forceType ?? fieldInfo.type) {
    case questionTypes.SHORT_TEXT:
      return <Input {...defaultProps} />;
    case questionTypes.SELECT:
      return (
        <Select
          {...defaultProps}
          options={fieldInfo.options.sort(byOrder).map((option) => ({
            label: option.label,
            value: option.id,
          }))}
        />
      );
    case questionTypes.HTTP_URL:
      return <Input {...defaultProps} type='url' />;
    case questionTypes.PHONE:
      return <Input {...defaultProps} type='tel' />;
    case questionTypes.EMAIL:
      return <Input {...defaultProps} type='email' />;
    case questionTypes.PDF_FILE:
      return (
        <FileUpload
          {...defaultProps}
          uploadUrl='/forms/hacker_application/response/files/upload'
          accept={[FileUpload.supportedFiles.PDF]}
          questionId={fieldInfo.id}
        />
      );
    case questionTypes._FREE_SELECT:
      return <Combobox {...defaultProps} />;
    case questionTypes._NUMBER:
      return <Input {...defaultProps} type='number' />;
  }
}

export function FormProvider({ children }) {
  const { loading: isLoadingResponse, data: responseInfo, refetch } = useGet({
    path: '/forms/hacker_application/response',
  });

  const { loading: isLoadingForm, data: formInfo } = useGet({
    path: '/forms/hacker_application',
    resolve: (data) => ({
      ...data,
      questions: data.questions.sort(byOrder),
    }),
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isSaving, setIsSaving] = useState(0); // Semaphores are cool
  const [formState, setFormState] = useState({
    errors: {},
    form: {},
    // Anything that is not submitted
    local: {
      mlh_coc: false,
      mlh_share: false,
      htv_consent: false,
    },
  });

  useEffect(() => {
    setIsReady(false);
    if (isLoadingForm || isLoadingResponse) return;
    if (!(responseInfo?.isDraft ?? true)) {
      toast.error('You have already applied');
      return navigate('/dashboard');
    }
    (async () => {
      // If no response, create one for the user
      if (!responseInfo) {
        await fetchApi('/forms/hacker_application/response', {
          method: 'POST',
          body: JSON.stringify({
            form: formInfo.id,
            isDraft: true,
            answers: [],
          }),
        });

        // At this point, the effect is "done"
        await refetch();
        return;
      }

      // Create a map of responses to questions
      const responsesToQuestion = responseInfo.answers.reduce(
        (acc, response) => {
          acc[response.question] =
            response.answer ?? response.answerOptions[0]?.option;
          return acc;
        },
        {},
      );

      // Hydrate form with response
      const asyncOperations = [];
      const form = formInfo.questions.reduce((acc, question) => {
        const value = responsesToQuestion[question.id];
        acc[question.id] = value ?? question.defaultAnswer ?? '';

        // If it's a file, then load it's info
        if (value && question.type === questionTypes.PDF_FILE) {
          asyncOperations.push(
            fetchApi(`/forms/hacker_application/response/files/${value}`).then(
              (data) => (acc[data.question] = data),
            ),
          );
        }
        return acc;
      }, {});

      await Promise.all(asyncOperations);
      setFormState((_state) => ({
        ..._state,
        errors: {},
        form,
      }));

      setIsReady(true);
    })();
  }, [isLoadingResponse, isLoadingForm, responseInfo, formInfo, refetch]);

  // Save prompt
  const toastPrompt = useRef();
  useEffect(() => {
    if (!isReady || isSaving || isDisabled) {
      if (!isReady || isDisabled) {
        toast.remove(toastPrompt.current);
      }
      return;
    }

    if (toastPrompt.current) {
      toastPrompt.current = toast.success('Application has been saved!', {
        id: toastPrompt.current,
        duration: 2000,
      });
    }
    return () => {
      toastPrompt.current = toast.loading('Saving application...', {
        id: toastPrompt.current,
        duration: 999999,
      });
    };
  }, [isSaving, isReady]);

  return (
    <FormContext.Provider
      value={{
        setFormState,
        formState,
        formInfo,
        setIsSaving,
        isSaving,
        isReady,
        setIsDisabled,
        isDisabled,
      }}
    >
      <Loading isLoading={!isReady}>{children}</Loading>
    </FormContext.Provider>
  );
}
