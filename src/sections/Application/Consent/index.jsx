import Text from '@htv/ui-kit/components/Text';

import Checkbox from '../../../components/Checkbox';
import { layout, fieldset, legend, full_col } from '../Application.module.scss';
import { useForm } from '../Form/FormContext';

export default function Consent() {
  const { formState, setFormState } = useForm();

  const applyProps = name => ({
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
        Consent Form
      </Text>
      <div className={layout}>
        <Text
          lineHeight='relaxed'
          className={full_col}
          color='white'
          type='meta1'
          as='p'
        >
          I, hereby grant permission to Hack the Valley to use screenshots
          and/or video of me taken during Hack the Valley V in publications,
          news releases, online, and in other communication related to the
          mission of Hack the Valley. I further give my consent and submit my
          compliance to the use of a third party video conference service for
          the virtual participation of Hack the Valley V
        </Text>
        <Checkbox
          {...applyProps('htv_consent')}
          className={full_col}
          label='I agree'
        />
      </div>
    </fieldset>
  );
}
