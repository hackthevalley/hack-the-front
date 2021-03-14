import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { StaticImage } from 'gatsby-plugin-image';
import {
  container,
  rectangle,
  bashHeader,
  button,
  bashText,
  aboutTitle,
  aboutText,
  greenText,
} from './About.module.scss';

export default function About() {
  return (
    <Section backgroundColor='charcoal'>
      <div className={container}>       
        <div className={rectangle}>
          <div className={bashHeader}>
            <StaticImage className={button}
              src='../../../images/ellipse1.png'
              placeholder='tracedSVG'/>
            <StaticImage className={button}
              src='../../../images/ellipse2.png'
              placeholder='tracedSVG'/>
            <StaticImage className={button}
              src='../../../images/ellipse3.png'
              placeholder='tracedSVG'/>
            <Text className={bashText} lineHeight='normal' align='center' type='meta1'>bash</Text>
          </div>
          <Text className={aboutTitle} lineHeight='relaxed' type='body1'>$&nbsp; about hack the valley</Text>
          <Text className={aboutText} lineHeight='relaxed' type='body2'>
            Join&nbsp;
            <span className={greenText}>750 </span>
            innovative and creative developers, designers, and creators for&nbsp;
            <span className={greenText}>36 hours of hacking</span>
            . You'll get access to some of the best hardware and APIs on the market. Plus get to meet some 
            experienced and awesome mentors! All this in just one weekend? I know, it's hard to believe.
          </Text>
          <Text className={aboutText} lineHeight='relaxed' type='body2'>
            Remember, you don't need to be a pro to attend. So, if this is your first hackathon, we can't
            wait to expose you to the incomparable world of creation.
          </Text>
          <Text className={aboutText} lineHeight='relaxed' type='body2' weight='bold'>
            <span className={greenText}>COMING SOON Fall 2021</span>
          </Text>
        </div>
      </div>
    </Section>
  );
}
