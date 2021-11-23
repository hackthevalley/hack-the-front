import Text from '@htv/ui-kit/components/Text';
import { useEffect } from 'react';

import { fieldset, legend, layout } from '../Application.module.scss';
import { FormField, useForm } from '../Form/FormContext';
import './Personal.module.scss';

export default function Personal({ userInfo }) {
  const { formInfo, setFormState } = useForm();

  useEffect(() => {
    const [fn, sn, email] = formInfo.questions.slice(0, 3);
    setFormState(_ => ({
      ..._,
      form: {
        ..._.form,
        [fn.id]: userInfo.firstName,
        [sn.id]: userInfo.lastName,
        [email.id]: userInfo.email,
      },
    }));
  }, [ formInfo.questions, userInfo, setFormState ]);

  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Personal
      </Text>
      <div className={layout}>
        <FormField
          index='0'
          fieldProps={{
            disabled: true,
            readOnly: true,
          }}
        />
        <FormField
          index='1'
          fieldProps={{
            disabled: true,
            readOnly: true,
          }}
        />
        <FormField
          index='2'
          fieldProps={{
            disabled: true,
            readOnly: true,
          }}
        />
        <FormField
          fieldProps={{
            placeholder: 'e.g. +1-4162878872',
          }}
          index='3'
        />
      </div>
    </fieldset>
  );
}
