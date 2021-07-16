import Text from '@htv/ui-kit/components/Text';
import { useContext, useEffect } from 'react';
import Checkbox from '../../../components/Checkbox';
import { container, fieldset, legend } from '../Application.module.scss';
import { ActionsContext, FormContext } from '../Form';
import { checkbox } from './Mlh.module.scss';

export default function Mlh() {
  const store = useContext(FormContext);
  const { setForm, setValidity } = useContext(ActionsContext);

  useEffect(() => {
    const isValid = [
      store.code_of_conduct_confirm,
      store.privacy_confirm,
      store.email_consent_confirm,
    ].every(Boolean);
    setValidity({ mlh: isValid });
  }, [setValidity, store]);

  const NormalText = ({ text }) => (
    <Text type='body1' font='secondary' as='span' lineHeight='relaxed'>
      {text}
    </Text>
  );

  const LinkText = ({ text, href }) => (
    <a href={href}>
      <Text
        type='body1'
        font='secondary'
        color='lime'
        as='span'
        lineHeight='relaxed'
      >
        {text}
      </Text>
    </a>
  );

  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        MLH Code of Conduct, Data Sharing, and Term & Conditions
      </Text>
      <div className={container}>
        <div className={checkbox}>
          <Checkbox
            checked={store.privacy_confirm}
            onChange={(e) => setForm({ privacy_confirm: e.target.checked })}
            required
          >
            <NormalText text='I have read and agree to the ' />
            <LinkText text='MLH Code of Conduct' />
            <NormalText text='.' />
          </Checkbox>
        </div>
        <div className={checkbox}>
          <Checkbox
            checked={store.code_of_conduct_confirm}
            onChange={(e) =>
              setForm({ code_of_conduct_confirm: e.target.checked })
            }
            required
          >
            <NormalText
              text='I authorize you to share my application/registration information
            with Major League Hacking for event administration, ranking, MLH
            administration in-line with the '
            />
            <LinkText text='MLH Privacy Policy' />
            <NormalText text='. ' />
            <NormalText text='I further agree to the terms of both the ' />
            <LinkText text='MLH Contest Terms and Conditions' />
            <NormalText text=' and the ' />
            <LinkText text='MLH Privacy Policy' />
            <NormalText text='.' />
          </Checkbox>
        </div>
        <div className={checkbox}>
          <Checkbox
            checked={store.email_consent_confirm}
            onChange={(e) =>
              setForm({ email_consent_confirm: e.target.checked })
            }
            required
          >
            <NormalText text='I authorize Major League Hacking to send me occasional messages about hackathons including pre- and post-event informational emails.' />
          </Checkbox>
        </div>
      </div>
    </fieldset>
  );
}
