import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import {
  header,
  factionsContainer,
  factionContainer,
  factionImage,
  backButton,
  expandedFactionContainer,
  expandedFaction,
  factionContentContainer,
  factionFaq,
} from './Factions.module.scss';
import { factions, questions } from './data';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';

export const query = graphql`
  {
    health: file(relativePath: { eq: "factions-health.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, height: 200, placeholder: TRACED_SVG)
      }
    }
    nature: file(relativePath: { eq: "factions-nature.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, height: 200, placeholder: TRACED_SVG)
      }
    }
    technology: file(relativePath: { eq: "factions-technology.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, height: 200, placeholder: TRACED_SVG)
      }
    }
    discovery: file(relativePath: { eq: "factions-discovery.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, height: 200, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default function Factions() {
  let data = useStaticQuery(query);
  let [faction, setFaction] = useState(null);

  let displayFaction = (faction) => (
    <>
      <GatsbyImage
        image={getImage(data[faction.name])}
        alt={faction.imageAlt}
        className={factionImage}
      />
      <Text type='heading2' as='span' transform='uppercase'>
        {faction.name}
      </Text>
    </>
  );

  return (
    <Section backgroundColor='charcoal'>
      <div className={header}>
        <Text type='heading2' transform='uppercase' as='span'>
          The Factions
        </Text>
        <Text type='heading2' color='lime' as='span'>
          // Click to view details
        </Text>
      </div>
      {faction == null && (
        <div className={factionsContainer}>
          {factions.map((faction) => (
            <button
              className={factionContainer}
              key={faction.name}
              onClick={() => setFaction(faction)}
            >
              {displayFaction(faction)}
            </button>
          ))}
        </div>
      )}
      {faction != null && (
        <div className={expandedFactionContainer}>
          <button className={backButton} onClick={() => setFaction(null)}>
            <Text type='heading2' transform='uppercase' as='span'>
              &larr; All Factions
            </Text>
          </button>
          <div className={expandedFaction}>
            <button
              className={factionContainer}
              onClick={() => setFaction(null)}
            >
              {displayFaction(faction)}
            </button>
            <div className={factionContentContainer}>
              <Text type='heading2' transform='uppercase' as='span'>
                {faction.name} faction
              </Text>
              <Text type='body1'>{faction.content}</Text>
            </div>
          </div>
        </div>
      )}
      <div>
        {questions.map(({ title, content }) => (
          <div key={title} className={factionFaq}>
            <Text type='heading2' as='span' transform='uppercase'>
              &gt; {title}
            </Text>
            <Text type='body1'>{content}</Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
