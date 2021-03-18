import Button from '@htv/ui-kit/components/Button';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { StaticImage } from 'gatsby-plugin-image';
import {
  container,
  five,
  gt,
  header,
  imageContainer,
  infoContainer,
  linesContainer,
  prompt,
  registerButton,
  subheader,
  title,
} from './Splash.module.scss';

export default function Splash() {
  return (
    <Section backgroundColor='charcoal'>
      <div className={container}>
        <div className={linesContainer}></div>
        <div className={infoContainer}>
          <div className={header}>
            <Text className={gt} lineHeight='normal' type='heading1' as='span'>
              &gt;
            </Text>
            <Text
              className={title}
              transform='uppercase'
              lineHeight='spaced'
              type='heading1'
            >
              <span>Hack The</span>
              <span>
                Valley <span className={five}>5</span>
              </span>
            </Text>
          </div>
          <div className={subheader}>
            <Text lineHeight='relaxed' type='heading2' as='span'>
              &gt; October xx - xx, 2021
            </Text>
            <Text lineHeight='relaxed' type='heading2' as='span'>
              &gt; U of T, Scarborough
            </Text>
            <Text
              lineHeight='normal'
              type='heading2'
              color='lime'
              as='span'
              className={prompt}
            >
              &gt; Up for the challenge?
            </Text>
            <Button
              onClick={() => console.log('owo')}
              className={registerButton}
            >
              Register for HTV
            </Button>
            <Text lineHeight='normal' type='meta1'>
              *Applications close September XX, 2021
            </Text>
          </div>
        </div>
        <div className={imageContainer}>
          <StaticImage
            src='../../../images/splash.png'
            placeholder='tracedSVG'
            alt='People using computers'
          />
        </div>
      </div>
    </Section>
  );
}
