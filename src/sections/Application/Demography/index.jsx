import Text from '@htv/ui-kit/components/Text';
import {
  fieldset,
  legend,
} from '../Application.module.scss';
import {} from './Demography.module.scss';

export default function Demography() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>Demography</Text>
    </fieldset>
  );
}