import Text from '@htv/ui-kit/components/Text';
import { useContext, useEffect } from 'react';
import Checkbox from '../../../components/Checkbox';
import { container, fieldset, legend } from '../Application.module.scss';
import { ActionsContext, FormContext } from '../Form';
import { checkbox } from './Consent.module.scss';

export default function Consent() {
  const store = useContext(FormContext);
  const { setForm, setValidity } = useContext(ActionsContext);

  useEffect(() => {
    const isValid = [store.media_consent_confirm].every(Boolean);
    setValidity({ mlh: isValid });
  }, [setValidity, store]);

  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Consent Form
      </Text>
      <div className={container}>
        <Text type='body1' font='secondary' as='span' lineHeight='relaxed'>
          I, hereby grant permission to Hack the Valley to use screenshots
          and/or video of me taken during Hack the Valley V in publications,
          news releases, online, and in other communication related to the
          mission of Hack the Valley. I further give my consent and submit my
          compliance to the use of a third party video conference service for
          the virtual participation of Hack the Valley V.
        </Text>
        <div className={checkbox}>
          <Checkbox
            checked={store.media_consent_confirm}
            onChange={(e) =>
              setForm({ media_consent_confirm: e.target.checked })
            }
            required
          >
            <Text type='body1' font='secondary' as='span' lineHeight='relaxed'>
              I agree
            </Text>
          </Checkbox>
        </div>
      </div>
    </fieldset>
  );
}
