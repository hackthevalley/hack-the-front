import Text from '@htv/ui-kit/components/Text';
import {
  fieldset,
  legend,
} from '../Application.module.scss';
import {} from './Experience.module.scss';

export default function Experience() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>Experience</Text>
    </fieldset>
  );
}