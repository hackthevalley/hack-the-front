import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import classNames from 'classnames';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useGet } from 'restful-react';

import Button from '@htv/ui-kit/components/Button';
import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import placeholderImage from '../../images/monke.gif';

import Loading from '../../components/Loading';
import {
  container,
  content,
  back,
  npm,
  header,
  explore,
  cards,
  factions,
  faq,
  factionIcons,
  card,
} from './Dashboard.module.scss';
import Status from './Status';
import statuses from '../../utils/enums/statuses';
import { getJwt } from '../../utils/ApiProvider';

function Dashboard() {
  const { site } = useStaticQuery(query);
  const { loading: isLoadingForm, data: formInfo } = useGet({
    path: `/forms/hacker_application`,
  });
  const { loading: isLoadingUserInfo, data: userInfo } = useGet({
    path: '/account/users/me',
  });
  const { loading: isLoadingResponse, data: responseInfo, refetch: refresh } = useGet({
    path: `/forms/hacker_application/response`,
  });
  const { loading: isLoadingDiscord, data: discordInfo } = useGet({
    lazy: !site.siteMetadata.featureFlags.discord,
    path: '/api/discord',
    base: '',
  });

  if (isLoadingForm || isLoadingUserInfo || isLoadingResponse || isLoadingDiscord) {
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
        <Status responseInfo={responseInfo} formInfo={formInfo} refresh={refresh}/>
        <Text
          className={explore}
          type='body1'
          font='secondary'
          color='white'
          as='h2'
        >
          Explore
        </Text>
        <div className={cards}>
          <Card
            as='a'
            target='_blank'
            rel='noreferrer noopenner'
            href='/#routes'
            backgroundColor='darkviolet'
            className={classNames(card, factions)}
          >
            <div className={factionIcons}>
              <StaticImage
                height={60}
                width={60}
                alt='Artificial Intelligence'
                src='../../images/faction-icons/Artificial-Intelligence.png'
              />
              <StaticImage
                height={60}
                width={60}
                alt='Financial'
                src='../../images/faction-icons/Finance.png'
              />
              <StaticImage
                height={60}
                width={60}
                alt='Diversity'
                src='../../images/faction-icons/factions-diversity.png'
              />
              <StaticImage
                height={60}
                width={60}
                alt='Sustainability'
                src='../../images/faction-icons/Sustainability.png'
              />
            </div>
            <Text type='heading2' font='secondary' as='h3'>
              The Factions of <strong>HTV7</strong>
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
          {site.siteMetadata.featureFlags.discord
            && responseInfo?.applicant?.status === statuses.ACCEPTED_INVITE.value
            && (
            <>
              <Card
                as='a'
                target='_blank'
                rel='noreferrer noopenner'
                href={process.env.GATSBY_DISCORD_INVITE_LINK}
                backgroundColor='darkviolet'
                className={classNames(card, factions)}
              >
                <StaticImage
                  width={100}
                  alt='Discord'
                  src='../../images/discord.png'
                />
                <Text type='heading2' font='secondary' as='h3'>
                  Join the discord!
                </Text>
              </Card>
              <Card
                as='a'
                onClick={async e => {
                  e.preventDefault();
                  const { token } = await getJwt();
                  window.location = `/api/discord/link?${ new URLSearchParams({ token })}`;
                }}
                href='/api/discord/link'
                backgroundColor='darkviolet'
                className={classNames(card, factions)}
              >
                <img
                  src={discordInfo?.message?.avatar?.url ?? placeholderImage}
                  alt="Discord user avatar"
                  width='100'
                />
                <div>
                  <Text type='heading2' font='secondary' as='h3'>
                    {discordInfo?.message?.tag ?? 'Link your Discord'}
                  </Text>
                  {discordInfo?.message?.tag && (
                    <Text type='meta1' font='secondary' as='p'>
                      Click here to re-link your discord
                    </Text>
                  )}
                </div>
              </Card>
            </>
          )}
        </div>
      </Section>
    </div>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        featureFlags {
          discord
        }
      }
    }
  }
`;

export default Dashboard;
