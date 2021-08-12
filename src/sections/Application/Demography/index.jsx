import Text from '@htv/ui-kit/components/Text';

import questionTypes from '../../../utils/enums/questionTypes';
import { fieldset, legend, layout, two_col } from '../Application.module.scss';
import { FormField } from '../Form/FormContext';

export default function Demography() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Demography
      </Text>
      <div className={layout}>
        <div className={two_col}>
          <FormField
            index='9'
            forceType={questionTypes._NUMBER}
            fieldProps={{
              min: 0,
            }}
          />
          <FormField index='10'/>
        </div>
        <FormField index='11'/>
      </div>
    </fieldset>
  );
}
