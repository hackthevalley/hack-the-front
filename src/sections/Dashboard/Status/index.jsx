import classNames from 'classnames';
import { navigate } from 'gatsby';

import Button from '@htv/ui-kit/components/Button';
import Card from '@htv/ui-kit/components/Card';
import Text from '@htv/ui-kit/components/Text';
import statuses from '../../../utils/enums/statuses';

import { container, status, button } from './Status.module.scss';

const formatDate = (date) =>
  new Intl.DateTimeFormat(`en-US`, {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(date);

const getStatus = (response) => {
  if (response?.isDraft === false) {
    return {
      text: 'Submitted!',
      status: statuses.SUBMITTED,
    };
  }

  return {
    text: 'Not Submitted.',
    status: statuses.NOT_SUBMITTED,
  };
};

export default function Status({ formInfo, responseInfo }) {
  const statusInfo = getStatus(responseInfo);
  const start = new Date(formInfo.startAt);
  const end = new Date(formInfo.endAt);
  const now = new Date();

  let isDisabled = statusInfo.status === statuses.SUBMITTED;
  let btnText = 'View Application';

  if (start > now) {
    btnText = 'Coming soon';
    isDisabled = true;
  } else if (now > end) {
    btnText = 'Closed';
    isDisabled = true;
  }

  return (
    <Card backgroundColor='darkviolet' className={container}>
      <div>
        <Text type='meta1' font='secondary' color='white'>
          Current Application Status
        </Text>
        <Text
          className={classNames(statusInfo.class, status)}
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
      <Button
        onClick={() => navigate('/application')}
        disabled={isDisabled}
        className={button}
      >
        {btnText}
      </Button>
    </Card>
  );
}
