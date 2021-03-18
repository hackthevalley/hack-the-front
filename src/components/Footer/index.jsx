import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import {lists, mlh, lists2, icons, linkText} from './Footer.module.scss';
import {ReactComponent as FacebookIcon} from "../../images/facebook.svg";
import {ReactComponent as TwitterIcon} from "../../images/twitter.svg";
import {ReactComponent as InstagramIcon} from "../../images/instagram.svg";
import {ReactComponent as GithubIcon} from "../../images/github.svg";
import {ReactComponent as LinkedInIcon} from "../../images/linkedin.svg";


const links = [
  {
      img: FacebookIcon,
      to: 'https://www.facebook.com/hackthevalley',
      name: ' hackthevalley ',
  },
  {
      img: GithubIcon,
      to: 'https://github.com/hackthevalley',
      name: ' hackthevalley ',
  },
  {
      img: TwitterIcon,
      to: 'https://twitter.com/hackthevalley5',
      name: ' hackthevalley5 ',
  },
  {
      img: InstagramIcon,
      to: 'https://www.instagram.com/hackthevalley/',
      name: ' hackthevalley ',
  },
  {
      img: LinkedInIcon,
      to: 'https://www.linkedin.com/company/hack-the-valley',
      name: ' hackthevalley ',
  },
]


export default function Footer() {

  return (
    <Section as={'footer'} backgroundColor='darkviolet'>
     
      <ul className={lists}>
        {links.map(({ img: Icon, ...link }, index) => 
          (<li key={index} className={lists2}><Text color="white" as={'a'} href={link.to} type="meta1" className={linkText}><Icon className={icons}/>{link.name}</Text></li>) 
        )}
      </ul>
      <Text as={'a'} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" type="meta1" className={mlh}> 
          MLH Code of Conduct
      </Text>
    </Section>
  );
}
