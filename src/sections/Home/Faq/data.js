import Text from '@htv/ui-kit/components/Text';

export const Faqs = [
  {
    title: (
      <>
        What do I need to <strong>bring</strong>?
      </>
    ),
    content: (
      <>
        <p>
          <Text as='span' color='lime' type='body2'>
            You'll need:&nbsp;
          </Text>
          A laptop and charger.
        </p>
        <p>Everything else is optional.</p>
        <div>
          <p>
            However, we strongly{' '}
            <Text as='span' type='body2' color='yellow'>
              encourge you
            </Text>{' '}
            to bring a:
          </p>
          <ul>
            <li>sleeping bag</li>
            <li>pillows</li>
            <li>toiletries</li>
            <li>a couple of change of clothes.</li>
          </ul>
        </div>
        <p>
          <Text as='span' color='red' type='body2'>
            You'll need:&nbsp;
          </Text>
          An idea, or a team.
        </p>
        <p>
          You can create your own team (teams of 4 recommended) during the
          hackathon, and generate some amazing creations along the way. You also
          don't need to worry about food, we've got you covered.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        How much will it <strong>cost</strong> me?
      </>
    ),
    content: (
      <p>
        It’s completely free, so don’t worry! We'll provide you with a weekend's
        worth of meals, drinks, and snacks and a place to crash when you need a
        break from coding. In fact, you’ll probably walk away loaded with all
        the swag that you’ll get at Hack the Valley.
      </p>
    ),
  },
  {
    title: (
      <>
        How is Hack The Valley <strong>run</strong>?
      </>
    ),
    content: (
      <p>
        Hack The Valley almost entirely by (sleep-deprived) University of
        Toronto students, with some advice and assistance from our friends at
        Department of Student Life (DSL) and Association of Mathematical and
        Computer Science Students (AMACSS). One hundred percent of the funding
        for Hack the Valley comes from corporate sponsor donations.
      </p>
    ),
  },
  {
    title: (
      <>
        How to become a <strong>sponsor</strong>?
      </>
    ),
    content: (
      <>
        <p>Interested in being a sponsor?</p>
        <p>
          Send us an inquiry at{' '}
          <Text type='body2' as='a' href='mailto:sponsorships@hackthevalley.io'>
            sponsorships@hackthevalley.io
          </Text>
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        <strong>When</strong> is it?
      </>
    ),
    content: <p>Hack The Valley will be taking place on Month Date, Year.</p>,
  },
  {
    title: (
      <>
        More <strong>questions</strong>?
      </>
    ),
    content: (
      <p>
        Have any uncertainties? Voice it at{' '}
        <Text type='body2' as='a' href='mailto:hello@hackthevalley.io'>
          hello@hackthevalley.io
        </Text>
      </p>
    ),
  },
];
