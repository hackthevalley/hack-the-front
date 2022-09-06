import { StaticImage } from 'gatsby-plugin-image';

export const questions = [];

export const factions = [
  {
    name: `Artificial Intelligence`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/Artificial-Intelligence.png'
        placeholder='TRACED_SVG'
        alt='Artificial Intelligence Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `The Artificial Intelligence (AI) theme delves into the realm of cutting-edge technology and its potential to transform various aspects of our lives. Participants in this tribe are fascinated by the possibilities of AI, machine learning, and deep learning algorithms. They aim to create innovative applications that harness the power of AI to unlock new insights across industries such as healthcare, education, finance, and beyond. Through their projects, they strive to push the boundaries of what is possible with AI and pave the way for a future powered by intelligent machines`,
  },
  {
    name: `Financial`,
    image: (props) => (
      <StaticImage
        className={props.className}
        src='../../../images/faction-icons/Finance.png'
        placeholder='TRACED_SVG'
        alt='Financial Faction'
        loading='eager'
        width={400}
      />
    ),
    content: `The financial theme revolves around revolutionizing the way we manage and interact with money. Participants in this tribe focus on reimagining financial systems, exploring fintech innovations, and addressing economic disparities. From improving access to financial services for underserved communities to developing smart budgeting tools and blockchain-based solutions, they aim to empower individuals, businesses, and societies to achieve greater financial stability and prosperity.`,
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
    content: `The sustainability theme encourages participants to develop software solutions that contribute to a more sustainable future. With a focus on leveraging technology for positive environmental impact, participants in this tribe delve into areas such as energy efficiency, waste reduction, and ecological conservation. Whether it's creating platforms for promoting eco-friendly behaviours, optimizing resource management systems, or fostering community engagement around sustainability, participants in this tribe seek to drive meaningful change through software innovation.`,
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
