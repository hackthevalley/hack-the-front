import Text from '@htv/ui-kit/components/Text';

import { fieldset, legend } from '../Application.module.scss';
import './Consent.module.scss';

export default function Consent() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Consent Form
      </Text>
    </fieldset>
  );
}
