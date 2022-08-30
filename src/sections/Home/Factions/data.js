import { StaticImage } from 'gatsby-plugin-image';

export const questions = [];

export const factions = [
  {
    name: `Health`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/factions-health.png'
        placeholder='TRACED_SVG'
        alt='Health Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `Participants in the health tribe show affection
    towards solutions within the problem space of both interpersonal
    and intrapersonal health. Whether it be mental health, physical,
    social, or some other more precise discipline, participants here
    care about leveraging our technology to better serve our health
    and our well-being as a people.`,
  },
  {
    name: `Nature`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/factions-nature.png'
        placeholder='TRACED_SVG'
        alt='Nature Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `The nature tribe is all about finding ways to bring
    technology together to serve the ecosystem and environment. Unlike
    the health tribe, nature tribe participants care about the health
    of animals, plants, the Earth, and the ecosystem in general. Working
    together, they aim to create a technological tool that will help
    solve issues like global warming, greenhouse gas emissions, species
    extinction, and many more.`,
  },
  {
    name: `Diversity`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/factions-diversity.png'
        placeholder='TRACED_SVG'
        alt='Diversity Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `Participants in the diversity tribe are all about finding
     ways to make our community more diverse and inclusive.  They can touch 
     on topics such as race, gender expression, disability and educational 
     attainment. With the recent events in the world’s racial history, this 
     tribe will be introspective around how their products can better 
     reflect the change we want to see - and become a part of that change.`,
  },
  {
    name: `Discovery`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/factions-discovery.png'
        placeholder='TRACED_SVG'
        alt='Discovery Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `Participants in the discovery challenge aim to create
    technological solutions that push the boundaries of what we’re
    used to and what we can expect. Whether they want to dive deep
    into the new worlds of VR and AR or leverage new ML and AI tools,
    these participants want to create a solution that uses up-and-coming
    technology or taking innovative approaches to create something
    brand new.`,
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
