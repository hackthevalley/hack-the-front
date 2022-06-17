import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@htv/ui-kit/components/Button';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import {
  container,
  version,
  gt,
  header,
  imageContainer,
  infoContainer,
  linesContainer,
  prompt,
  registerButton__disabled,
  registerButton,
  subheader,
  title,
} from './Splash.module.scss';

export default function Splash() {
  const { site } = useStaticQuery(query);

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
                Valley <span className={version}>8</span>
              </span>
            </Text>
          </div>
          <div className={subheader}>
            <Text lineHeight='relaxed' type='heading2' as='span'>
              &gt; Oct. 14-16, 2022
            </Text>
            <Text
              lineHeight='normal'
              type='heading2'
              color='lime'
              as='span'
              className={prompt}
            >
              Up for the challenge?
            </Text>
            <Button
              as={Link}
              to={site.siteMetadata.featureFlags.open ? '/register' : '#'}
              className={classNames(
                site.siteMetadata.featureFlags.open || registerButton__disabled,
                registerButton,
              )}
            >
              {site.siteMetadata.featureFlags.open
                ? 'Apply for HTV'
                : 'Coming soon'}
            </Button>
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

const query = graphql`
  {
    site {
      siteMetadata {
        startDate(formatString: "MMMM D")
        endDate(formatString: "D, YYYY")
        featureFlags {
          open
        }
      }
    }
  }
`;
