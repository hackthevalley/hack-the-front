import { StaticImage } from 'gatsby-plugin-image';

export const questions = [];

export const factions = [
  {
    name: `Sustainability`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/Sustainability.png'
        placeholder='TRACED_SVG'
        alt='Sustainability Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `The Sustainability theme empowers you to become a tech innovator for a healthier planet. In this tribe, you'll tackle the environmental challenges of today with cutting-edge solutions. From optimizing resource management to fostering community engagement around sustainability, your mission is to leverage technology for positive environmental impact.`,
  },
  {
    name: `Cybersecurity`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/Cybersecurity.png'
        placeholder='TRACED_SVG'
        alt='Cybersecurity Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `The Cybersecurity theme calls upon hackers to become the architects of a safer digital world. In this tribe, you'll confront the ever-evolving threats lurking in the online landscape. Whether it's crafting impenetrable defences against cyberattacks, developing proactive security solutions, or raising awareness about digital threats, your mission is to empower individuals, organizations, and societies to navigate the digital age with confidence.`,
  },
  {
    name: `Diversity`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/Diversity.png'
        placeholder='TRACED_SVG'
        alt='Diversity Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `The Diversity theme celebrates the power of a representative and inclusive tech industry. Join this tribe to be a changemaker, tackling issues related to race, gender, sexual orientation, disability, and other dimensions of diversity. Through innovative solutions, you'll leverage technology to create a more equitable future.`,
  },
  {
    name: `Artificial Intelligence`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/Artificial_Intelligence.png'
        placeholder='TRACED_SVG'
        alt='Artificial Intelligence Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `Step into the exciting world of Artificial Intelligence and Machine Learning, where enthusiasts like you are captivated by the incredible capabilities of these technologies. Driven by a relentless pursuit of groundbreaking solutions, you aim to unlock AI's full potential across fields like healthcare, education, and finance. With your pioneering spirit, you're reshaping innovation and envisioning a future where intelligent machines enhance every facet of human life`,
  },
  // {
  //   name: `Battle of the Coding Clashers`,
  //   image: (props) => (
  //     <>
  //       <StaticImage
  //         id='pgq'
  //         className={props.className}
  //         src='../../../images/faction-icons/pinnguaq.png'
  //         placeholder='TRACED_SVG'
  //         alt='Pinnguaq Faction'
  //         loading='eager'
  //         width={400}
  //       />
  //       <StaticImage
  //         className={props.className}
  //         src='../../../images/faction-icons/the-hub.png'
  //         placeholder='TRACED_SVG'
  //         alt='The Hub Logo'
  //         loading='eager'
  //         width={400}
  //       />
  //     </>
  //   ),
  //   content: (
  //     <>
  //       <p>
  //         The main goal of the challenge is to encourage people to create video
  //         games that are original and educational. The purpose of creating these
  //         games is to provide creators with opportunities to encourage their
  //         innovative thinking and technological skills. Additionally, this is
  //         coupled with the requirement of introducing youth and adults to
  //         computer science via educational video games.
  //       </p>
  //       <p>
  //         To learn more about this challenge, check out the requirements{' '}
  //         <a
  //           href='/battle-of-the-coding-clashers.pdf'
  //           rel='noreferrer noopener'
  //           target='_blank'
  //         >
  //           here
  //         </a>
  //       </p>
  //     </>
  //   ),
  // },
];
