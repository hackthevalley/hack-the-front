import Text from '@htv/ui-kit/components/Text';

import questionTypes from '../../../utils/enums/questionTypes';
import { fieldset, legend, layout, full_col } from '../Application.module.scss';
import { FormField } from '../Form/FormContext';

export default function Experience() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Experience
      </Text>
      <div className={layout}>
        <FormField
          index='12'
          forceType={questionTypes._NUMBER}
          fieldProps={{
            min: 0,
          }}
        />
        <FormField index='13' />
        <FormField index='14' />
        <FormField index='15' />
        <FormField
          index='16'
          fieldProps={{
            className: full_col,
          }}
        />
      </div>
    </fieldset>
  );
}
