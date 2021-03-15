import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import ellipse1 from '../../../images/ellipse1.png';
import ellipse2 from '../../../images/ellipse2.png';
import ellipse3 from '../../../images/ellipse3.png';
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
            <div className={button}>
              <img src={ellipse1}/>
            </div>
            <div className={button}>
              <img src={ellipse2}/>
            </div>
            <div className={button}>
              <img src={ellipse3}/>
            </div>
            <Text className={bashText} lineHeight='normal' align='center' type='meta1'>bash</Text>
          </div>
          <Text className={aboutTitle} lineHeight='relaxed' type='heading2'>$&nbsp; about hack the valley</Text>
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
