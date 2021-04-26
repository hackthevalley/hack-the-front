import { ReactComponent as SponsorBackground } from '../../../images/sponsor.svg';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import classNames from 'classnames';
import * as styles from './Sponsors.module.scss';

export default function Sponsors() {
  return (
    <Section className={styles.container} backgroundColor='charcoal'>
      <div className={styles.sign}>
        <SponsorBackground/>
        <Text className={styles.label} type='heading2'>Sponsors</Text>
      </div>
      <Text className={styles.text} type='body2'>
        Interested in sponsoring <Text type='body2' as='span' color='lime'>
          Hack the Valley
        </Text>?
      </Text>
      <Text
        className={classNames(
          styles.text__column,
          styles.text,
        )}
        align='center'
        type='body2'
      >
        <span>Send us an inquiry at</span>
        <Text type='body1' as='a' href='mailto:sponsorships@hackthevalley.io' color='lime'>
          sponsorships@hackthevalley.io
        </Text>
      </Text>
    </Section>
  );
}
