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
      <Fragment key='0'>
        <Text color='lime'>You'll need</Text>: A laptop and charger.
      </Fragment>,
      `Everything else is optional`,
    ],
  },
];
