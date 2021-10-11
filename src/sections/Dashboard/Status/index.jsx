import classNames from 'classnames';
import { graphql, useStaticQuery, navigate } from 'gatsby';

import Button from '@htv/ui-kit/components/Button';
import Card from '@htv/ui-kit/components/Card';
import Text from '@htv/ui-kit/components/Text';

import statuses from '../../../utils/enums/statuses';
import { fetchApi } from '../../../utils/ApiProvider';
import { container, status, button, buttonGroup } from './Status.module.scss';
import toast from 'react-hot-toast';
import { useState } from 'react';

const formatDate = (date) =>
  new Intl.DateTimeFormat(`en-US`, {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(date);

const getStatus = (response) => {
  const config = statuses[response?.applicant?.status ?? statuses.NOT_SUBMITTED.value];
  return {
    text: config.label,
    status: config.value,
  };
};

export default function Status({ formInfo, responseInfo, refresh }) {
  const [ isRsvping, setIsRsvping ] = useState(false);
  const statusInfo = getStatus(responseInfo);
  const { site } = useStaticQuery(query);
  const start = new Date(formInfo.startAt);
  const end = new Date(formInfo.endAt);
  const now = new Date();

  let isDisabled = ![statuses.NOT_SUBMITTED.value, statuses.APPLYING.value].includes(statusInfo.status);
  let btnText = 'View Application';
  let isClosed;

  if (start > now) {
    btnText = 'Coming soon';
    isClosed = true;
  } else if (now > end || !site.siteMetadata.featureFlags.rsvp) {
    btnText = 'Closed';
    isClosed = true;
  }

  const rsvp = async (isAccept) => {
    setIsRsvping(true);
    await toast.promise(
      fetchApi(
        `/forms/hacker_application/response/${isAccept? 'accept' : 'reject'}_invite`,
        {
          method: 'POST',
        },
      ),
      {
        loading: 'Confirming invitation...',
        success: 'Application has been updated!',
        error: 'Unable to confirm status. Please try again later.',
      },
    );

    setIsRsvping(false);
    refresh();
  }

  return (
    <Card backgroundColor='darkviolet' className={container}>
      <div>
        <Text type='meta1' font='secondary' color='white'>
          Current Application Status
        </Text>
        <Text
          className={classNames(
            status,
            isClosed ? 'closed' : statusInfo.status.toLowerCase()
          )}
          type='heading2'
          font='secondary'
          as='p'
        >
          {statusInfo.text}
        </Text>
        <Text type='meta1' font='secondary'>
          Application due on{' '}
          <Text type='meta1' font='secondary' color='white'>
            {formatDate(new Date(formInfo.endAt))}
          </Text>
        </Text>
      </div>
      {statusInfo.status !== statuses.ACCEPTED.value ? (
        <Button
          onClick={() => navigate('/application')}
          disabled={isClosed || isDisabled}
          className={button}
        >
          {btnText}
        </Button>
      ) : (
        <div className={buttonGroup}>
          <Button
            onClick={() => rsvp(true)}
            disabled={isRsvping}
            color="lime"
          >
            Accept
          </Button>
          <Button
            onClick={() => rsvp(false)}
            disabled={isRsvping}
            color="red"
          >
            Decline
          </Button>
        </div>
      )}
    </Card>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        featureFlags {
          rsvp
        }
      }
    }
  }
`;
