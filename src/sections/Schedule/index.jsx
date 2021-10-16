import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { useEffect, useState } from 'react';
import { useGet } from 'restful-react';
import classNames from 'classnames';
import Loading from '../../components/Loading';
import Events from './Events';
import { container, section, frame, header, tab, activeTab, tabs, dot, redDot, yellowDot, greenDot, dots, bar } from './Schedule.module.scss';

const dateFormat = (date = new Date) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
  }).formatToParts(new Date(date.split('-'))).reduce((acc, { type, value }) => {
    switch (type) {
      case 'literal':
        return acc;
      case 'day': {
        const ones = value % 10;
        switch (ones) {
          case 1:
            acc.dayPeriod = 'st';
            break;
          case 2:
            acc.dayPeriod = 'nd';
            break;
          case 3:
            acc.dayPeriod = 'rd';
            break;
          default:
            acc.dayPeriod = 'th';
            break;
        }
        acc[type] = value;
        return acc;
      }
      default:
        acc[type] = value;
        return acc;
    }
  }, {});
}

export default function Schedule() {
  const { data, loading } = useGet({ path: '/api/schedule' });
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    if (loading) return;
    const now = new Date();
    const formattedNow = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    if (data.events[formattedNow]) {
      setCurrentDate(formattedNow);
    } else {
      setCurrentDate(Object.keys(data.events)[0]);
    }
  }, [data, loading]);

  const dateParts = dateFormat(currentDate);

  return (
    <Loading isLoading={loading}>
      <div className={container}>
        <Section className={section} backgroundColor='charcoal'>
          <ul className={tabs}>
            {Object.keys(data?.events ?? {}).map((date, idx) => (
              <li key={date}>
                <Text
                  as='button'
                  color='white'
                  type='body1'
                  className={classNames(tab, date === currentDate && activeTab)}
                  onClick={() => setCurrentDate(date)}
                >
                  Day {idx + 1}
                </Text>
              </li>
            ))}
          </ul>
          <Card className={frame} backgroundColor='darkviolet'>
            <div className={header}>
              <div className={bar}>
                <div className={dots}>
                  <div className={classNames(dot, redDot)} />
                  <div className={classNames(dot, yellowDot)} />
                  <div className={classNames(dot, greenDot)} />
                </div>
                <Text type='meta1'>bash</Text>
              </div>
              <Text type='body1' weight='normal'>
                $ hack the valley schedule - {dateParts.weekday.toLowerCase()},{' '}
                {dateParts.month.toLowerCase()} {dateParts.day + dateParts.dayPeriod}
              </Text>
            </div>
            <Events
              items={data?.events[currentDate]}
              metadata={data?.metadata}
            />
          </Card>
        </Section>
      </div>
    </Loading>
  );
}