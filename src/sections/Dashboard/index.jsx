import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import classNames from 'classnames';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useGet } from 'restful-react';

import Button from '@htv/ui-kit/components/Button';
import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import Loading from '../../components/Loading';
import Status from './Status';

import {
  container,
  content,
  back,
  npm,
  header,
  explore,
  factions,
  faq,
  factionIcons,
  card,
} from './Dashboard.module.scss';

function Dashboard() {
  const { loading: isLoadingForm, data: formInfo } = useGet({
    path: `/forms/hacker_application`,
  });
  const { loading: isLoadingUserInfo, data: userInfo } = useGet({
    path: '/account/users/me',
  });
  const { loading: isLoadingResponse, data: responseInfo } = useGet({
    path: `/forms/hacker_application/response`,
  });

  if (isLoadingForm || isLoadingUserInfo || isLoadingResponse) {
    return (
      <Loading
        description="You're page would be ready soon owo"
        title='Loading...'
        isLoading
      />
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
              Welcome Back, {userInfo.firstName}
            </Text>
          </div>
          <Button
            onClick={() => {
              localStorage.removeItem('auth');
              navigate('/login');
            }}
            className={back}
            leftIcon={IoChevronBack}
            type='ghost'
            color='red'
          >
            Log Out
          </Button>
        </div>
        <Status responseInfo={responseInfo} formInfo={formInfo} />
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
              height={60}
              width={60}
              alt='Health'
              src='../../images/faction-icons/factions-health.png'
            />
            <StaticImage
              height={60}
              width={60}
              alt='Nature'
              src='../../images/faction-icons/factions-nature.png'
            />
            <StaticImage
              height={60}
              width={60}
              alt='Technology'
              src='../../images/faction-icons/factions-technology.png'
            />
            <StaticImage
              height={60}
              width={60}
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
