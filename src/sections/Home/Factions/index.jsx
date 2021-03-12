import { ReactComponent as Logo } from '@htv/ui-kit/assets/logo.svg';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import classNames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useState } from 'react';
import { factions, questions } from './data';
import {
  backButton,
  expandedFaction,
  expandedFactionContainer,
  factionContainer,
  factionContent,
  factionContentContainer,
  factionFaq,
  factionImage,
  factionsContainer,
  header,
  logo,
  logoAccentBlue,
  logoAccentGreen,
  logoAccentRed,
  logoAccentYellow,
} from './Factions.module.scss';

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

  let logoClassName = classNames(
    logo,
    faction?.name == 'health' && logoAccentRed,
    faction?.name == 'nature' && logoAccentGreen,
    faction?.name == 'technology' && logoAccentBlue,
    faction?.name == 'discovery' && logoAccentYellow,
  );

  let displayFaction = (faction) => (
    <>
      <GatsbyImage
        image={getImage(data[faction.name])}
        alt={faction.imageAlt}
        className={factionImage}
      />
      <Text type='heading2' as='h3' transform='uppercase' weight='normal'>
        {faction.name}
      </Text>
    </>
  );

  let displayExpandedFactionContainer = (faction) => (
    <div className={expandedFactionContainer}>
      <div className={expandedFaction}>
        <button className={factionContainer} onClick={() => setFaction(null)}>
          {displayFaction(faction)}
        </button>
        <div className={factionContentContainer}>
          <Text type='heading2' transform='uppercase' as='h3' weight='normal'>
            {faction.name} Faction
          </Text>
          <Text type='body1' className={factionContent}>
            {faction.content}
          </Text>
          <button className={backButton} onClick={() => setFaction(null)}>
            <Text type='heading2' transform='uppercase' as='span'>
              &larr; All Factions
            </Text>
          </button>
        </div>
      </div>
      <Logo className={logoClassName} />
    </div>
  );

  let displayFactionsContainer = () => (
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
  );

  return (
    <Section backgroundColor='charcoal'>
      <div className={header}>
        <Text type='heading2' transform='uppercase' weight='normal'>
          The Factions
        </Text>
        <Text type='heading2' color='lime' as='span'>
          // Click to view details
        </Text>
      </div>
      {faction
        ? displayExpandedFactionContainer(faction)
        : displayFactionsContainer()}
      {/* For accessibility reasons */}
      <Text type='heading2' style={{ display: 'none' }}>
        Questions about Factions
      </Text>
      {questions.map(({ title, content }) => (
        <div key={title} className={factionFaq}>
          <Text type='heading2' as='h3' transform='uppercase'>
            &gt; {title}
          </Text>
          <Text type='body1'>{content}</Text>
        </div>
      ))}
    </Section>
  );
}
