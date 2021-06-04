import Text from '@htv/ui-kit/components/Text';
import {
  fieldset,
  legend,
} from '../Application.module.scss';
import {} from './School.module.scss';

export default function School() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>School</Text>
    </fieldset>
  );
}