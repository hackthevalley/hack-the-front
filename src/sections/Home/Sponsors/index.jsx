import classNames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import { ReactComponent as SponsorBackground } from '../../../images/sponsor.svg';
import * as styles from './Sponsors.module.scss';

export default function Sponsors() {
  // const { sponsors, site } = useStaticQuery(query);
  const sponsorsEnabled = false; // site.siteMetadata.featureFlags.sponsors;

  return (
    <Section
      className={styles.container}
      backgroundColor='charcoal'
      id='sponsors'
    >
      <div className={styles.sign}>
        <SponsorBackground />
        <Text className={styles.label} type='heading2'>
          Sponsors
        </Text>
      </div>
      <Text className={styles.text} type='body2'>
        Interested in sponsoring{' '}
        <Text type='body2' as='span' color='lime'>
          Hack the Valley
        </Text>
        ?
      </Text>
      <Text
        className={classNames(styles.text__column, styles.text)}
        align='center'
        type='body2'
      >
        <span>Send us an inquiry at</span>
        <Text
          type='body1'
          as='a'
          href='mailto:sponsorships@hackthevalley.io'
          color='lime'
        >
          sponsorships@hackthevalley.io
        </Text>
      </Text>
      {sponsorsEnabled && (
        <Card className={styles.sponsors} backgroundColor='white' type='flat'>
          {sponsors.nodes
            .filter(tier => (tier.data.Sponsors ?? []).length)
            .map((tier) => (
              <div key={tier.recordId} style={{ '--scale': tier.data.Scale }}>
                <Text transform='uppercase' type='meta1' as='h3'>
                  {tier.data.Name} Sponsors
                </Text>
                <ul className={styles.sponsors__list}>
                  {tier.data.Sponsors.map((sponsor) => (
                    <li key={sponsor.recordId}>
                      <a
                        className={styles.sponsor__link}
                        href={sponsor.data.Link}
                        target='_blank'
                        rel='noopenner noreferrer'
                      >
                        <GatsbyImage
                          image={getImage(sponsor.data.Logo.localFiles[0])}
                          style={
                            sponsor.data.Scale !== null
                              ? { '--scale': tier.data.Scale * sponsor.data.Scale }
                              : undefined
                          }
                          alt={`${sponsor.data.Name}'s logo`}
                          className={styles.sponsor__asset}
                          objectPosition='center'
                          objectFit='contain'
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </Card>
      )}
    </Section>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        featureFlags {
          sponsors
        }
      }
    }
    sponsors: allAirtable(
      sort: { fields: data___Sort_Order, order: ASC }
      filter: { table: { eq: "Sponsor Types" } }
    ) {
      nodes {
        recordId
        data {
          Name
          Sponsors {
            recordId
            data {
              Link
              Name
              Scale
              Logo {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(width: 600)
                  }
                }
              }
            }
          }
          Scale
        }
      }
    }
  }
`;
