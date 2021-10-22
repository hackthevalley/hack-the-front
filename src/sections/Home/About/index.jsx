import classNames from 'classnames';

import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import { ReactComponent as AboutWave } from '../../../images/about-wave.svg';
import {
  rectangle,
  bashHeader,
  bashControls,
  bashButton,
  bashButton__red,
  bashButton__yellow,
  bashButton__green,
  atmosphere,
  container,
  title,
  body,
  text,
  outline,
  wave,
} from './About.module.scss';

export default function About() {
  return (
    <Section
      atmosphere={
        <div className={atmosphere}>
          <AboutWave className={wave} />
        </div>
      }
      backgroundColor='cactus'
      className={container}
      id='about'
    >
      <Card className={rectangle}>
        <div className={bashHeader}>
          <div className={bashControls}>
            <div className={classNames(bashButton, bashButton__red)} />
            <div className={classNames(bashButton, bashButton__yellow)} />
            <div className={classNames(bashButton, bashButton__green)} />
          </div>
          <Text lineHeight='normal' align='center' type='meta1'>
            bash
          </Text>
        </div>
        <Text className={title} type='heading2'>
          $&nbsp;
          <span>about hack the valley</span>
        </Text>
        <div className={body}>
          <Text className={text} lineHeight='relaxed' type='body2'>
            Join{' '}
            <Text type='body2' color='lime' as='span'>
              750
            </Text>{' '}
            innovative and creative developers, designers, and creators for{' '}
            <Text type='body2' color='lime' as='span'>
              36 hours of hacking
            </Text>
            . You'll get access to some of the best hardware and APIs on the
            market. Plus get to meet some experienced and awesome mentors! All
            this in just one weekend? I know, it's hard to believe.
          </Text>
          <Text className={text} lineHeight='relaxed' type='body2'>
            Remember, you don't need to be a pro to attend. So, if this is your
            first hackathon, we can't wait to expose you to the incomparable
            world of creation.
          </Text>
          <Text
            className={text}
            lineHeight='relaxed'
            weight='bold'
            color='lime'
            type='body2'
          >
            COMING SOON Winter 2022
          </Text>
        </div>
      </Card>
    </Section>
  );
}
