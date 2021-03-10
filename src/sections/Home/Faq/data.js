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
          You'll need:{' '}
          <Text as='span' type='body2'>
            A laptop and charger.
          </Text>
        </Text>{' '}
        <br />
        <Text type='body2' weight='normal'>
          Everything else is optional
        </Text>{' '}
        <br />
        <Text type='body2' weight='normal'>
          However, we strongly{' '}
          <Text color='yellow' type='body2' as='span'>
            encourage you
          </Text>{' '}
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
          &nbsp;&nbsp;&nbsp;&nbsp; & a couple of change of clothes.
        </Text>{' '}
        <br />
        <Text color='red' type='body2' weight='normal'>
          You won't need
          <Text as='span' type='body2'>
            : An idea, or a team.
          </Text>
        </Text>
        <br />
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
        <Text>idk lmao</Text>
      </div>,
    ],
  },
];
