import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { navigate } from 'gatsby';
import toast from 'react-hot-toast';

import Button from '@htv/ui-kit/components/Button';
import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import { fetchApi } from '../../../utils/ApiProvider';
import {
  card,
  container,
  content,
  footer,
  header,
  npm,
} from './Form.module.scss';
import { useForm } from './FormContext';

export default function Form({ children }) {
  const { formState, formInfo, isSaving } = useForm();
  const submit = async () => {
    toast
      .promise(
        fetchApi('/forms/hacker_application/response/submit', {
          method: 'POST',
        }),
        {
          loading: 'Submitting application...',
          success: 'Application successfully submitted!',
          error: 'Unable to submit application. Try again later',
        },
      )
      .then(() => {
        navigate('/dashboard');
      });
  };

  const isDisabled =
    isSaving ||
    !Object.values(formState.local).every(Boolean) ||
    Object.values(formState.errors).some(Boolean) ||
    formInfo.questions
      .map(
        (question) => question.required && formState.form[question.id] === '',
      )
      .some(Boolean);

  return (
    <Section backgroundColor='charcoal' className={container}>
      <div className={content}>
        <Text className={npm} type='body1' color='gray'>
          npm start challenge
        </Text>
        <div className={header}>
          <Text type='heading2' font='secondary' as='h1'>
            Application
          </Text>
          <Button
            onClick={() => navigate('/dashboard')}
            type='ghost'
            color='white'
            leftIcon={FaAngleLeft}
          >
            Back to Dashboard
          </Button>
        </div>
        <Card className={card}>
          <Text type='body1' font='secondary'>
            Please fill out all mandatory Fields.
          </Text>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
              return false;
            }}
            noValidate
          >
            {children}
            <div className={footer}>
              <Button disabled={isDisabled}>Submit Application</Button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}
