import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import Card from '@htv/ui-kit/components/Card';
import classNames from 'classnames';
import { useState } from 'react';
import { Faqs } from './data';

import filledQM from '../../../images/filled-question-marks.svg';
import { ReactComponent as Angle } from '../../../images/angle.svg';
import { grid, item, content, content__hidden, container, cover, angle, frame, question, question__outline, question__solid } from './Faq.module.scss';

const atmosphere = (
  <>
    <Angle className={angle}/>
    <div className={cover}>
      <div className={frame}>
        <Text as='span' lineHeight='normal' type='heading1' color='darkviolet' className={classNames(question, question__outline)}>
          ???
        </Text>
        <Text as='span' lineHeight='normal' type='heading1' color='darkviolet' className={classNames(question, question__solid)}>
          ???
        </Text>
      </div>
    </div>
  </>
);

export default function Faq() {
  const [ expanded, setExpanded ] = useState({});
  return (
    <Section
      atmosphere={atmosphere}
      backgroundColor='charcoal'
      className={container}
      id='faq'
    >
      <Text type='heading2' color='darkviolet'>
        console.log(“
        <Text type='heading2' as='span' color="white" weight='normal'>
          Frequently Asked Questions
        </Text>
        ”)
      </Text>
      <ul className={grid}>
        {Faqs.map((faq, key) => (
          <li key={key}>
            <Card
              as='button'
              className={item}
              onClick={() => setExpanded({
                ...expanded,
                [key]: !expanded[key],
              })}
            >
              <Text type='body1' transform='uppercase' as='h3' weight='normal'>
                <span>&gt;</span> {faq.title}
              </Text>
              <Text
                as='div'
                type='body2'
                color='white'
                lineHeight='relaxed'
                className={classNames(
                  expanded[key] || content__hidden,
                  content
                )}
              >
                {faq.content}
              </Text>
            </Card>
          </li> 
        ))}
      </ul>
    </Section>
  );
}
