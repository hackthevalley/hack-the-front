import Text from '@htv/ui-kit/components/Text';

import Checkbox from '../../../components/Checkbox';
import { layout, fieldset, legend, full_col } from '../Application.module.scss';
import { useForm } from '../Form/FormContext';
import { link } from './Mlh.module.scss';

export default function Mlh() {
  const { formState, setFormState } = useForm();

  const applyProps = (name) => ({
    onChange: ({ target }) => {
      setFormState({
        ...formState,
        local: {
          ...formState.local,
          [name]: target.value,
        },
      });
    },
    value: formState.local[name],
    required: true,
    name,
  });

  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        MLH Code of Conduct, Data Sharing, and Term & Conditions
      </Text>
      <div className={layout}>
        <Checkbox
          {...applyProps('mlh_coc')}
          className={full_col}
          label={
            <>
              I have read and agree to the{' '}
              <a className={link} href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target='_blank' rel='noreferrer noopener'>
                MLH Code of Conduct
              </a>
              .
            </>
          }
        />
        <Checkbox
          {...applyProps('mlh_share')}
          className={full_col}
          label={
            <>
              I authorize you to share my application/registration information
              with Major League Hacking for event administration, ranking, MLH
              administration in-line with the{' '}
              <a className={link} href='https://mlh.io/privacy' target='_blank' rel='noreferrer noopener'>
                MLH Privacy Policy
              </a>
              . I further agree to the terms of both the{' '}
              <a className={link} href='https://mlh.io/terms' target='_blank' rel='noreferrer noopener'>
                MLH Contest Terms and Conditions
              </a>{' '}
              and the{' '}
              <a className={link} href='https://mlh.io/privacy' target='_blank' rel='noreferrer noopener'>
                MLH Privacy Policy
              </a>
              .
            </>
          }
        />
        <Checkbox
          {...applyProps('mlh_email')}
          className={full_col}
          label='I authorize Major League Hacking to send me occasional messages about hackathons including pre- and post-event informational emails.'
        />
      </div>
    </fieldset>
  );
}
