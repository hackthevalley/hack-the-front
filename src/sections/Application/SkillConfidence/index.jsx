import Text from '@htv/ui-kit/components/Text';

import { fieldset, legend, layout, two_col } from '../Application.module.scss';
import { FormField } from '../Form/FormContext';

export default function SkillConfidence() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend' >
        Rate Your Confidence in the Following
      </Text>

      <div className={layout}>
        <div className={two_col}>
        <FormField index='25' />
        <FormField index='26' />
        </div>
        <div className={two_col}>
        <FormField index='27' />
        <FormField index='28' />
        </div>
        <div className={two_col}>
        <FormField index='21' />
        <FormField index='22' />
        </div>
        <div className={two_col}>
        <FormField index='23' />
        <FormField index='24' />
        </div>
      </div>
    </fieldset>
  );
}
