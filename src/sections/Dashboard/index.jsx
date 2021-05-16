import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useEffect, useState } from 'react';

import Button from '@htv/ui-kit/components/Button';
import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import {
  container,
  content,
  back,
  npm,
  header,
  status,
  explore,
  factions,
  faq,
  app,
  statusText,
  factionIcons,
  loading,
  card,
} from './Dashboard.module.scss';

const dueDate = new Date();
const formatDate = (date) =>
  new Intl.DateTimeFormat(`en-US`, {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(date);

function Dashboard() {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    let mounted = true;
    (async () => {
      window.setTimeout(() => {
        if (mounted) {
          setUserInfo({
            name: 'Stephanie',
            status: 'Submitted!',
          });
        }
      }, 5000);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (!userInfo) {
    return (
      <div className={container}>
        <Section className={content} backgroundColor='charcoal'>
          <Text className={loading} type='heading2' font='secondary'>
            Loading...
          </Text>
        </Section>
      </div>
    );
  }

  return (
    <div className={container}>
      <Section className={content} backgroundColor='charcoal'>
        <div className={header}>
          <div>
            <Text className={npm} type='body1' color='gray'>
              npm start challenge
            </Text>
            <Text type='heading2' font='secondary'>
              Welcome Back, {userInfo.name}
            </Text>
          </div>
          <Button
            className={back}
            leftIcon={IoChevronBack}
            type='ghost'
            color='red'
          >
            Log Out
          </Button>
        </div>
        <Card backgroundColor='darkviolet' className={status}>
          <div>
            <Text type='meta1' font='secondary' color='white'>
              Current Application Status
            </Text>
            <Text
              className={statusText}
              type='heading2'
              font='secondary'
              as='p'
            >
              {userInfo.status}
            </Text>
            <Text type='meta1' font='secondary'>
              Application due on{' '}
              <Text type='meta1' font='secondary' color='white'>
                {formatDate(dueDate)}
              </Text>
            </Text>
          </div>
          <Button as={Link} to='/application' className={app}>
            View Application
          </Button>
        </Card>
        <Text
          className={explore}
          type='body1'
          font='secondary'
          color='white'
          as='h2'
        >
          Explore
        </Text>
        <Card
          as='a'
          target='_blank'
          rel='noreferrer noopenner'
          href='/#factions'
          backgroundColor='darkviolet'
          className={classNames(card, factions)}
        >
          <div className={factionIcons}>
            <StaticImage
              height='60'
              width='60'
              alt='Health'
              src='../../images/faction-icons/factions-health.png'
            />
            <StaticImage
              height='60'
              width='60'
              alt='Nature'
              src='../../images/faction-icons/factions-nature.png'
            />
            <StaticImage
              height='60'
              width='60'
              alt='Technology'
              src='../../images/faction-icons/factions-technology.png'
            />
            <StaticImage
              height='60'
              width='60'
              alt='Discovery'
              src='../../images/faction-icons/factions-discovery.png'
            />
          </div>
          <Text type='heading2' font='secondary' as='h3'>
            The Factions of <strong>HTV5</strong>
          </Text>
        </Card>
        <Card
          as='a'
          target='_blank'
          rel='noreferrer noopenner'
          href='/#faq'
          backgroundColor='darkviolet'
          className={classNames(card, faq)}
        >
          <Text type='heading1' as='span' color='gray'>
            ???
          </Text>
          <Text type='heading2' font='secondary' as='h3'>
            FAQs
          </Text>
        </Card>
      </Section>
    </div>
  );
}

export default Dashboard;
