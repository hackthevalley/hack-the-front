import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { useEffect, useState } from 'react';
import { useGet } from 'restful-react';
import classNames from 'classnames';
import Loading from '../../components/Loading';
import Events from './Events';
import { container, section, frame, header, tab, activeTab, tabs, dot, redDot, yellowDot, greenDot, dots, bar } from './Schedule.module.scss';

const dateFormat = (date) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
  }).formatToParts(new Date(!date ? new Date().toString() : date.replaceAll('-', '/'))).reduce((acc, { type, value }) => {
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
  const RGB = (r, g, b) => { return {"r": r, "g":g, "b":b} };

  const data = {
      metadata: {
        MINUTES_PER_CELL: 30,
      },
      events: {
        "2024-10-04": [
          {
            id: 'checkin',
            title: 'Hacker Check In',
            type: {color: RGB(114, 197, 93)},
            hosts: [{name: "HTV"}],
            location: "IC Building",
            meta: {start: 32, end: 48, span: 16},
          },
          {
            id: 'dinner day 1',
            title: 'Dinner',
            type: {color: RGB(255, 229, 153)},
            hosts: [{name: "HTV"}],
            location: "1st Floor @ IC Vending Machines",
            meta: {start: 36, end: 38, span: 2},
          },
          {
            id: 'opening',
            title: 'Opening Ceremony',
            type: {color: RGB(114, 197, 93)},
            hosts: [{name: 'Adem Ozdemir'}, {name: 'Josephine Tjhia'}],
            location: "1st Floor @ IC130",
            meta: {start: 38, end: 42, span: 4},
          },
          {
            id: 'workshop-library',
            title: 'Library Workshop',
            type: {color: RGB(164, 194, 244)},
            hosts: [{name: "HTV"}],
            location: "2nd Floor @ IC230",
            meta: {start: 44, end: 48, span: 2},
          },
        ],
        "2024-10-05": [
          {
            id: 'hike',
            title: 'Hike the Valley @ IC Doors & UTSC Valley',
            type: {color: RGB(114, 197, 93)},
            hosts: [{name: "HTV"}],
            location: "IC Doors & UTSC Valley",
            meta: {start: 14, end: 15, span: 1},
          },
          {
            id: 'day2 breakfast',
            title: 'Breakfast',
            type: {color: RGB(255, 229, 153)},
            hosts: [{name: "HTV"}],
            location: "IC Atrium",
            meta: {start: 16, end: 20, span: 4},
          },
          {
            id: 'mlh',
            title: 'MLH Workshop',
            type: {color: RGB(248, 185, 42)},
            hosts: [{name: "MLH"}],
            location: "IC",
            meta: {start: 20, end: 22, span: 2},
          },
          {
            id: 'fgf',
            title: 'Cyber Security',
            type: {color: RGB(25, 24, 32)},
            hosts: [{name: "Mushtaq Ahmed"}, {name: "Dan Cartaginese"}, {name: "Khash Nazakardeh"}],
            location: "2nd Floor @ IC220",
            meta: {start: 21, end: 25, span: 4},
          },
          {
            id: 'lunch day 2',
            title: 'Lunch',
            type: {color: RGB(255, 229, 153)},
            hosts: [{name: "HTV"}],
            location: "IC Atrium",
            meta: {start: 24, end: 28, span: 4},
          },
          {
            id: 'suprise',
            title: 'Mystery Workshop',
            type: {color: RGB(0,100,200)},
            hosts: [{name: "Dell"}],
            location: "2nd Floor @ IC220",
            meta: {start: 25, end: 27, span: 2},
          },
          {
            id: 'sdg',
            title: 'Hack your Emotions in Tech',
            type: {color: RGB(200,100,0)},
            hosts: [{name: "Noah Kham PhD", position: "UofT"}],
            location: "2nd Floor @ IC220",
            meta: {start: 27, end: 29, span: 2},
          },
          {
            id: 'bead making',
            title: 'Bead Making',
            type: {color: RGB(114, 197, 93)},
            hosts: [{name: "HTV"}],
            location: "IC Atrium",
            meta: {start: 26, end: 29, span: 3},
          },
          {
            id: 'wimcs',
            title: 'Women In Science Summit',
            type: {color: RGB(100,100,100)},
            hosts: [],
            location: "1st Floor @ IC130",
            meta: {start: 29, end: 35, span: 6},
          },
          {
            id:"mlh work 2",
            title: 'MLH Workshop',
            type: {color: RGB(248, 185, 42)},
            hosts: [{name: "MLH"}],
            location: "1st Floor @ IC130",
            meta: {start: 36, end: 38, span: 2},
          },
          {
            id: 'day 2 dinner',
            title: 'Dinner',
            type: {color: RGB(255, 229, 153)},
            hosts: [{name: "HTV"}],
            location: "IC Atrium",
            meta: {start: 38, end: 42, span: 4},
          },
          {
            id: 'react',
            title: 'Intro to React',
            type: {color: RGB(164, 194, 244)},
            hosts: [{name: "Conrad Mo"}],
            location: "2nd Floor @ IC230",
            meta: {start: 35, end: 37, span: 2, colspan: 2},
          },
          {
            id: 'ai',
            title: 'AI Workshop',
            type: {color: RGB(164, 194, 244)},
            hosts: [{name: "Alex Olsen", position: "UofT Research"}],
            location: "2nd Floor @ IC220",
            meta: {start: 37, end: 40, span: 3, colspan: 2},
          },
          {
            id: 'intermediate',
            title: 'How to Actually Learn How to Code (Intermediate)',
            type: {color: RGB(164, 194, 244)},
            hosts: [{name: "Aran Saseelan"}],
            location: "2nd Floor @ IC220",
            meta: {start: 40, end: 42, span: 2, colspan: 2},
          },
          {
            id: 'networking',
            title: 'The Art of Networking: How to be a Networking Warrior',
            type: {color: RGB(164, 194, 244)},
            hosts: [{name: "Sibel Jahangirli"}],
            location: "2nd Floor @ IC220",
            meta: {start: 42, end: 44, span: 2},
          },
          {
            id: 'figma',
            title: 'Figma Workshop',
            type: {color: RGB(164, 194, 244)},
            hosts: [{name: "Sumaiya Chalya"}],
            location: "2nd Floor @ IC220",
            meta: {start: 44, end: 46, span: 2},
          },
          {
            id: "karaoke",
            title: 'Karaoke',
            type: {color: RGB(246, 178, 107)},
            hosts: [{name: "HTV"}],
            location: "2nd Floor @ IC230",
            meta: {start: 46, end: 48, span: 2},
          }
        ],
        "2024-10-06": [
          {
            id: 'day 3 breakfast',
            title: 'Breakfast',
            type: {color: RGB(255, 229, 153)},
            hosts: [{name: "HTV"}],
            location: "IC Atrium",
            meta: {start: 16, end: 20, span: 4},
          },
          {
            id: 'deadline',
            title: 'Hard deadline to submit: 10 AM',
            type: {color: RGB(255, 0, 0)},
            hosts: [],
            // location: "",
            meta: {start: 20, end: 21, span: 1},
          },
          {
            id: 'day 3 lunch',
            title: 'Lunch',
            type: {color: RGB(255, 229, 153)},
            hosts: [{name: "HTV"}],
            location: "IC Atrium",
            meta: {start: 24, end: 28, span: 4},
          },
          {
            id: 'judging',
            title: 'Judging Period',
            type: {color: RGB(192, 158, 138)},
            hosts: [{name: "HTV"}],
            location: "IC Atrium",
            meta: {start: 20, end: 30, span: 10},
          },
          {
            id: 'closing',
            title: 'Closing Ceremonies',
            type: {color: RGB(114, 197, 93)},
            hosts: [{name: "HTV"}],
            location: "1st Floor @ IC130",
            meta: {start: 32, end: 36, span: 4},
          },
        ],
      }
  }
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    const now = new Date();
    const formattedNow = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    if (data.events[formattedNow]) {
      setCurrentDate(formattedNow);
    } else {
      setCurrentDate(Object.keys(data.events)[0]);
    }
  }, []);

  const dateParts = dateFormat(currentDate);

  return (
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
  );
}
