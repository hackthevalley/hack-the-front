import { Fragment } from 'react';
import Text from '@htv/ui-kit/components/Text';

export const Faqs = [
  {
    title: (
      <>
        What do I need to <strong>bring</strong>?
      </>
    ),
    content: [
      <div>
        <Text color='lime' type='body2' weight='normal'>
          You'll need:&nbsp;
          <Text as='span' type='body2'>
            A laptop and charger. <br /> <br />
          </Text>
        </Text>
        <Text type='body2' weight='normal'>
          Everything else is optional. <br /> <br />
        </Text>
        <Text type='body2' weight='normal'>
          However, we strongly&nbsp;
          <Text color='yellow' type='body2' as='span'>
            encourage you&nbsp;
          </Text>
          to bring a:
        </Text>
        <Text type='body2' weight='normal'>
          &nbsp;&nbsp;&nbsp;&nbsp; + sleeping bag
        </Text>
        <Text type='body2' weight='normal'>
          &nbsp;&nbsp;&nbsp;&nbsp; + pillows
        </Text>
        <Text type='body2' weight='normal'>
          &nbsp;&nbsp;&nbsp;&nbsp; + toiletries
        </Text>
        <Text type='body2' weight='normal'>
          &nbsp;&nbsp;&nbsp;&nbsp; & a couple of change of clothes. <br />
          <br />
        </Text>
        <Text color='red' type='body2' weight='normal'>
          You won't need
          <Text as='span' type='body2'>
            : An idea, or a team. <br /> <br />
          </Text>
        </Text>
        <Text type='body2' weight='normal'>
          You can create your own team (teams of 4 recommended) during the
          hackathon, and generate some amazing creations along the way. You also
          don't need to worry about food, we've got you covered.
        </Text>
      </div>,
    ],
  },
  {
    title: (
      <>
        How much will it <strong>cost</strong> me?
      </>
    ),
    content: [
      <div>
        <Text type='body2' weight='normal'>
          It’s completely free, so don’t worry! We'll provide you with a
          weekend's worth of meals, drinks, and snacks and a place to crash when
          you need a break from coding. In fact, you’ll probably walk away
          loaded with all the swag that you’ll get at Hack the Valley.
        </Text>
      </div>,
    ],
  },
  {
    title: (
      <>
        How is Hack The Valley <strong>run</strong>?
      </>
    ),
    content: [
      <div>
        <Text type='body2' weight='normal'>
          Hack The Valley almost entirely by (sleep-deprived) University of
          Toronto students, with some advice and assistance from our friends at
          Department of Student Life (DSL) and Association of Mathematical and
          Computer Science Students (AMACSS). One hundred percent of the funding
          for Hack the Valley comes from corporate sponsor donations.
        </Text>
      </div>,
    ],
  },
  {
    title: (
      <>
        How to become a <strong>sponsor</strong>?
      </>
    ),
    content: [
      <div>
        <Text type='body2' weight='normal'>
          Interested in being a sponsor? <br />
          Send us an inquiry at&nbsp;
          <Text type='body2' as='a' href='mailto:sponsorships@hackthevalley.io'>
            sponsorships@hackthevalley.io
          </Text>
        </Text>
      </div>,
    ],
  },
  {
    title: (
      <>
        <strong>When</strong> is it?
      </>
    ),
    content: [
      <div>
        <Text type='body2' weight='normal'>
          Hack The Valley will be taking place on Month Date, Year.
        </Text>
      </div>,
    ],
  },
  {
    title: (
      <>
        More <strong>questions</strong>?
      </>
    ),
    content: [
      <div>
        <Text type='body2' weight='normal'>
          Have any uncertainty? <br />
          Voice it at&nbsp;
          <Text type='body2' as='a' href='mailto:hello@hackthevalley.io'>
            hello@hackthevalley.io
          </Text>
        </Text>
      </div>,
    ],
  },
];
