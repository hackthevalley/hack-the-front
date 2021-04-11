import { ReactComponent as Logo } from '@htv/ui-kit/assets/logo.svg';
import Section from '@htv/ui-kit/components/Section';
import Button from '@htv/ui-kit/components/Button';
import Text from '@htv/ui-kit/components/Text';
import Card from '@htv/ui-kit/components/Card';
import classNames from 'classnames';
import { useState } from 'react';
import { factions, questions } from './data';
import * as styles from './Factions.module.scss';

function FactionHeader() {
  return (
    <div className={styles.header}>
      <Text
        className={styles.heading}
        type='heading2'
        transform='uppercase'
        weight='normal'
      >
        The Factions
      </Text>
      <Text type='heading2' color='lime' as='span'>
        //Click to view details
      </Text>
    </div>
  );
}

function FactionQuestions() {
  return (
    <>
      <Text type='heading2' style={{ display: 'none' }}>
        Questions about Factions
      </Text>
      {questions.map(({ title, content }) => (
        <div key={title}>
          <Text
            type='heading2'
            as='h3'
            transform='uppercase'
          >
            &gt; {title}
          </Text>
          <Text type='body1'>{content}</Text>
        </div>
      ))}
    </>
  )
}

export default function Factions() {
  const [ selected, setSelected ] = useState();
  return (
    <Section id='factions' backgroundColor='charcoal'>
      <FactionHeader/>
      <ul className={styles.items}>
        {factions.map(({ name, content, image: FactionIcon }, key) => {
          const labeledIcon = (
            <>
              <FactionIcon />
              <Text
                type='body1'
                as='p'
                align='center'
                transform='uppercase'
              >
                {name}
              </Text>
            </>
          );
          return (
            <li key={key}>
              <Card
                onClick={() => setSelected(key)}
                className={classNames(
                  selected !== undefined && styles.button__hide,
                  styles.button,
                )}
                as='button'
                type='flat'
              >
                {labeledIcon}
              </Card>
              <div
                className={classNames(
                  selected === key && styles.content__show,
                  styles.content,
                )}
              >
                <div>
                  {labeledIcon}
                </div>
                <Text
                  type='heading2'
                  as='h3'
                  transform='uppercase'
                >
                  {name} Faction
                </Text>
                <Text type='body1'>{content}</Text>
                <Button>
                  Back to all factions
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
      <FactionQuestions/>
    </Section>
  );
}
