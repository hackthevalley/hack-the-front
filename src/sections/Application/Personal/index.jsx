import Text from '@htv/ui-kit/components/Text';
import { fieldset, legend, layout } from '../Application.module.scss';
import { FormField } from '../Form/FormContext';
import './Personal.module.scss';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Personal() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Personal
      </Text>
      <div className={layout}>
        <FormField index='0'/>
        <FormField index='1'/>
        <FormField
          index='2'
          validator={value => {
            if (!value.match(EMAIL_REGEX)) {
              return 'Please provide a valid email address.';
            }
          }}
        />
        <FormField
          index='3'
          validator={value => {
            if (!value.startsWith('+')) {
              return 'Phone number must include area code';
            } else if (value.length < 9) {
              return 'Please provide a valid phone number';
            }
          }}
        />
      </div>
    </fieldset>
  );
}
