import Text from '@htv/ui-kit/components/Text';
import _countries from '../../../utils/enums/countries';
import _majors from '../../../utils/enums/majors';
import questionTypes from '../../../utils/enums/questionTypes';
import _schools from '../../../utils/enums/schools';
import { fieldset, layout, legend, two_col } from '../Application.module.scss';
import { FormField } from '../Form/FormContext';

function toOptions(list) {
  return list.map((country) => ({
    label: country,
    value: country,
  }));
}

const countries = toOptions(_countries);
const schools = toOptions(_schools);
const majors = toOptions(_majors);

export default function School() {
  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        School
      </Text>
      <div className={layout}>
        <FormField
          index='4'
          forceType={questionTypes._FREE_SELECT}
          fieldProps={{
            options: countries,
          }}
        />
        <FormField
          index='5'
          forceType={questionTypes._FREE_SELECT}
          fieldProps={{
            options: schools,
          }}
        />
        <FormField
          index='6'
          forceType={questionTypes._FREE_SELECT}
          fieldProps={{
            options: majors,
          }}
        />
        <div className={two_col}>
          <FormField index='7'/>
          <FormField
            index='8'
            forceType={questionTypes._NUMBER}
            fieldProps={{ min: 0 }}
          />
        </div>
      </div>
    </fieldset>
  );
}
