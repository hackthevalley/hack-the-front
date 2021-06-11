import Text from '@htv/ui-kit/components/Text';
import { useState } from 'react';
import Checkbox from '../../../components/Checkbox';
import { fieldset, container, legend } from '../Application.module.scss';
import { checkbox } from './Mlh.module.scss';

export default function Mlh() {
  const [codeChecked, setCodeChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

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
          <Checkbox checked={codeChecked} onChange={setCodeChecked} required>
            <NormalText text='I have read and agree to the ' />
            <LinkText text='MLH Code of Conduct' />
            <NormalText text='.' />
          </Checkbox>
        </div>
        <div className={checkbox}>
          <Checkbox
            checked={privacyChecked}
            onChange={setPrivacyChecked}
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
          <Checkbox checked={emailChecked} onChange={setEmailChecked} required>
            <NormalText text='I authorize Major League Hacking to send me occasional messages about hackathons including pre- and post-event informational emails.' />
          </Checkbox>
        </div>
      </div>
    </fieldset>
  );
}
