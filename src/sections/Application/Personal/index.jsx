import Text from '@htv/ui-kit/components/Text';
import {
  fieldset,
  legend,
} from '../Application.module.scss';
import {} from './Personal.module.scss';

export default function Personal() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>Personal</Text>
    </fieldset>
  );
}