import Text from '@htv/ui-kit/components/Text';

import { fieldset, legend } from '../Application.module.scss';
import './Mlh.module.scss';

export default function Mlh() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        MLH Code of Conduct, Data Sharing, and Term & Conditions
      </Text>
    </fieldset>
  );
}
