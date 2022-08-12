import Text from '@htv/ui-kit/components/Text';

import Checkbox from '../../../components/Checkbox';
import { layout, fieldset, legend, full_col } from '../Application.module.scss';
import { useForm } from '../Form/FormContext';

export default function Covid() {
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
        Possible Covid-19 Precaution
      </Text>
      <div className={layout}>
        <Text
          lineHeight='relaxed'
          className={full_col}
          color='white'
          type='meta1'
          as='p'
        >
          I agree to complete an exposure screening questionnaire before
          traveling to the hackathon venue. If restrictions are enforced
          further, I understand that I may need to provide proof of vaccination
          based on local guidelines and that proof of vaccination will be needed
          to enter the event.
        </Text>
        <Checkbox
          {...applyProps('htv_vaccination')}
          className={full_col}
          label='I have read and agree to the Covid-19 precaution above.'
        />
      </div>
    </fieldset>
  );
}
