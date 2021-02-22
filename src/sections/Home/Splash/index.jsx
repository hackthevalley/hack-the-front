import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import styles from './Splash.module.scss';

export default function Factions() {
  return (
    <Section backgroundColor='darkviolet'>
      <div className={styles.header}>
        <Text
          className={styles.gt}
          lineHeight='normal'
          type='heading1'
          as='span'
        >
          &gt;
        </Text>
        <Text
          className={styles.title}
          transform='uppercase'
          lineHeight='normal'
          type='heading1'
        >
          <span>Hack The</span>
          <span>Valley 5</span>
        </Text>
      </div>
    </Section>
  );
}
