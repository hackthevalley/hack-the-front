import Text from '@htv/ui-kit/components/Text';
import { graphql, useStaticQuery } from 'gatsby';

import Checkbox from '../../../components/Checkbox';
import { layout, fieldset, legend, link, full_col } from '../Application.module.scss';
import { useForm } from '../Form/FormContext';

export default function Consent() {
  const { formState, setFormState } = useForm();
  const { site } = useStaticQuery(query);
  const htv = site.siteMetadata.title;

  const applyProps = (name) => ({
    onChange: ({ target }) => {
      setFormState({
        ...formState,
        local: {
          ...formState.local,
          [name]: target.value,
        },
      });
    },
    value: formState.local[name],
    required: true,
    name,
  });

  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Consent Form
      </Text>
      <div className={layout}>
        <Text
          lineHeight='relaxed'
          className={full_col}
          color='white'
          type='meta1'
          as='p'
        >
          I, hereby grant permission to Hack the Valley to use screenshots
          and/or video of me taken during {htv} in publications,
          news releases, online, and in other communication related to the
          mission of Hack the Valley. I further give my consent and submit my
          compliance to the use of a third party video conference service for
          the virtual participation of {htv}
        </Text>
        <Checkbox
          {...applyProps('htv_consent')}
          className={full_col}
          label='I agree'
        />
        <Text
          lineHeight='relaxed'
          className={full_col}
          color='white'
          type='meta1'
          as='p'
        >
          If I intend to attend the event in person, I agree that I will be fully
          vaccinated based on local guidelines. Vaccines must be in the approved
          list by <a
            href="https://www.canada.ca/en/health-canada/services/drugs-health-products/covid19-industry/drugs-vaccines-treatments/vaccines.html"
            rel='noreferrer noopener'
            className={link}
            target='_blank'
          >Health Canada</a> (Proof of Vaccination will be required to enter the event)
        </Text>
        <Checkbox
          {...applyProps('htv_vaccination')}
          className={full_col}
          label='I agree'
        />
      </div>
    </fieldset>
  );
}

const query = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`;
