import Text from '@htv/ui-kit/components/Text';

import questionTypes from '../../../utils/enums/questionTypes';
import { fieldset, legend, layout } from '../Application.module.scss';
import { FormField } from '../Form/FormContext';

export default function General() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        General
      </Text>
      <div className={layout}>
        <FormField
          index='17'
        />
        <FormField
          index='18'
        />
      </div>
    </fieldset>
  );
}
