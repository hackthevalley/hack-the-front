import { ReactComponent as Logo } from '@htv/ui-kit/assets/logo.svg';
import Section from '@htv/ui-kit/components/Section';
import Button from '@htv/ui-kit/components/Button';
import Text from '@htv/ui-kit/components/Text';
import classNames from 'classnames';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { factions, questions } from './data';
import * as styles from './Factions.module.scss';


// TODO: Find a better implementation which uses positioning with flow, then apply transform
const initRef = factions.map(() => ({}));
export default function Factions() {
  const [ faction, setFaction ] = useState();
  const [ height, setHeight ] = useState(0);
  const elements = useRef(initRef);

  const heightHandler = useCallback(() => {
    let newHeight = 0;
    if (faction) {
      const index = factions.findIndex(({ name }) => name === faction);
      newHeight = Math.max(
        elements.current[index].button.clientHeight,
        elements.current[index].content.clientHeight,
      );
    } else {
      newHeight = Math.max(
        ...elements.current.map(el => el.button.clientHeight)
      );
    }
    setHeight(newHeight);
  }, [ faction ]);

  useLayoutEffect(() => {
    heightHandler();
    window.addEventListener('resize', heightHandler, { passive: true });
    return () => {
      window.removeEventListener('resize', heightHandler, { passive: true });
    };
  }, [ heightHandler ]);

  return (
    <Section id='factions' backgroundColor='charcoal'>
      <div className={styles.header}>
        <Text className={styles.title} type='heading2' transform='uppercase' weight='normal'>
          The Factions
        </Text>
        <Text type='heading2' color='lime' as='span'>
          // Click to view details
        </Text>
      </div>
      <ul style={{ "--height": height + `px` }} className={styles.factionDetails}>
        {factions.map(({ name, content, image: FactionIcon }, key) => (
          <li
            className={classNames(
              faction && (
                faction === name
                  ? styles.factionDetail__active
                  : styles.factionDetail__hidden
              ),
              styles.factionDetail,
            )}
            style={{ '--offset': key }}
            key={key}
          >
            <button
              ref={el => elements.current[key].button = el}
              onClick={() => setFaction(name)}
              aria-hidden={faction !== name}
              className={styles.factionButton}
              disabled={faction}
            >
              <FactionIcon/>
              <Text className={styles.factionItemLabel} type='body1' as='p' align='center' transform='uppercase'>{name}</Text>
            </button>
            <div
              ref={el => elements.current[key].content = el}
              aria-hidden={faction !== name}
              className={styles.factionContent}
            >
              <Text className={styles.factionHeading} type='heading2' as='h3' transform='uppercase'>{name} Faction</Text>
              <Text type='body1'>{content}</Text>
              <Button disabled={faction !== name} onClick={() => setFaction(null)} className={styles.back}>
                Back to all factions
              </Button>
            </div>
          </li>
        ))}
        <li>
          <Logo
            className={classNames(
              !!faction && styles[`icon${faction}`],
              styles.icon,
            )}
          />
        </li>
      </ul>
      <Text type='heading2' style={{ display: 'none' }}>
        Questions about Factions
      </Text>
      {questions.map(({ title, content }) => (
        <div key={title}>
          <Text className={styles.factionFaqTitle} type='heading2' as='h3' transform='uppercase'>
            &gt; {title}
          </Text>
          <Text type='body1'>{content}</Text>
        </div>
      ))}
      <noscript>
        <style
          dangerouslySetInnerHTML={{__html: `
            #factions > ul {
              height: auto;
            }
            #factions li {
              transform: none;
              position: relative;
            }

            #factions li > div {
              opacity: 1;
            }

            #factions li > div button {
              display: none;
            }
          `}}
        />
      </noscript>
    </Section>
  );
}
