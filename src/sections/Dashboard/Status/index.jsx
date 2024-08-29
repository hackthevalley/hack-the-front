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
import { useMutate } from 'restful-react';

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
  const { mutate: unsubmit } = useMutate({
    path: '/forms/hacker_application/response/unsubmit',
    verb: 'POST',
  });
  const start = new Date(formInfo.startAt);
  const end = new Date(formInfo.endAt);
  const now = new Date();

  let isSubmitted = ![statuses.NOT_SUBMITTED.value, statuses.APPLYING.value].includes(statusInfo.status);
  let btnText = !isSubmitted ? 'View Application' : 'Make Changes (Unsubmit Application)';
  let isClosed;

  if (start > now) {
    btnText = 'Coming soon';
    isClosed = true;
  } else if (now > end || !site.siteMetadata.featureFlags.rsvp) {
    btnText = 'Closed';
    isClosed = true;
  }

  const handleApply = () => {
    if (statusInfo.status == statuses.APPLYING.value) {
      navigate('/application');
    } else if (statusInfo.status == statuses.APPLIED.value) {
      if (confirm(
        "This action will unsubmit your application: " +
        "in order for your application to be considered " + 
        "you must submit again before the deadline"
      )) {
        const toastId = toast.loading("Unsubmitting application", {
          duration: 5000,
        });
        unsubmit()
          .then((data) => {
            toast.dismiss(toastId);
            toast.success("Successfully unsubmitted application");
            window.location.reload();
          })
          .catch((error) => {
            toast.dismiss(toastId);
            toast.error(`Error while unsubmitting: ${error?.data?.fallbackMessage}`);
          });
      }
    }
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
      {!site.siteMetadata.featureFlags.rsvp || statusInfo.status !== statuses.ACCEPTED.value ? (
        <Button
          onClick={handleApply}
          disabled={isClosed}
          color={isSubmitted ? 'red':'lime'}
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
