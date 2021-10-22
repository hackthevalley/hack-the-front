import { useStaticQuery, graphql } from 'gatsby';

import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import { ReactComponent as FacebookIcon } from '../../images/social-icons/facebook.svg';
import { ReactComponent as GithubIcon } from '../../images/social-icons/github.svg';
import { ReactComponent as InstagramIcon } from '../../images/social-icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../images/social-icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../images/social-icons/twitter.svg';
import { container, items, item, icon, label, mlh } from './Footer.module.scss';

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
];

export default function Footer() {
  const { site } = useStaticQuery(query);

  return (
    <Section as='footer' className={container} backgroundColor='charcoal'>
      <ul className={items}>
        {links.map(({ img: Icon, ...link }, index) => (
          <li key={index}>
            <Text
              rel='noreferrer noopener'
              className={item}
              target='_blank'
              href={link.to}
              color='white'
              type='meta1'
              as='a'
            >
              <Icon className={icon} />
              <span className={label}>{link.name}</span>
            </Text>
          </li>
        ))}
      </ul>
      {site.siteMetadata.featureFlags.mlh && (
        <Text
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          rel='noreferrer noopener'
          className={mlh}
          target='_blank'
          type='meta1'
          as='a'
        >
          MLH Code of Conduct
        </Text>
      )}
    </Section>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        featureFlags {
          mlh
        }
      }
    }
  }
`;
