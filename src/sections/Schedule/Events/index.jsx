import Card from '@htv/ui-kit/components/Card';
import Text from '@htv/ui-kit/components/Text';

import {
  list,
  time,
  event,
  eventCard,
  eventBar,
  eventContent,
  eventTime,
  eventDetailsHead,
  eventDetailsMeta,
} from './Events.module.scss';

export default function Events({ items, metadata }) {
  if (!items?.length) return null;

  const last = items[items.length - 1];
  const first = items[0];

  const cellToTime = (cell) => {
    const rawMinutes = cell * metadata.MINUTES_PER_CELL;
    const minutes = rawMinutes % 60;
    const hours = (rawMinutes - minutes) / 60;

    return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}${
      hours < 12 || hours >= 24 ? 'am' : 'pm'
    }`;
  };

  // Who needs leetcode when you have to build a new schedule every hackathon every year?
  const [maxElevation] = items
    .reduce((acc, item) => {
      acc[item.meta.start] = (acc[item.meta.start] ?? 0) + 1;
      acc[item.meta.end] = (acc[item.meta.end] ?? 0) - 1;
      return acc;
    }, [])
    .reduce(
      (acc, item) => {
        acc[1] += item;
        if (acc[1] > acc[0]) acc[0] = acc[1];
        return acc;
      },
      [0, 0],
    );

  const busyTil = new Array(maxElevation).fill(0);
  const renderItems = items.map((item, _, items) => {
    let colstart = 1;
    let colspan = 1;

    // If no conflicts at all
    if (
      items.some(
        (_item) =>
          _item !== item &&
          item.meta.start < _item.meta.end &&
          _item.meta.start < item.meta.end,
      )
    ) {
      colstart = busyTil.findIndex((b) => b <= item.meta.start);
      busyTil[colstart++] = item.meta.end;
    } else {
      busyTil.forEach((_, idx) => (busyTil[idx] = item.meta.end));
      colspan = maxElevation;
    }

    return {
      ...item,
      meta: {
        ...item.meta,
        // TODO: Change if we have more than 2 way
        colstart,
        colspan,
      },
    };
  });

  console.log(renderItems);

  return (
    <ul
      className={list}
      style={{
        '--rows': last.meta.end - first.meta.start,
        '--cols': maxElevation,
        '--size': `${5}rem`,
      }}
    >
      {new Array(last.meta.end - first.meta.start).fill(0).map((_, idx) => (
        <li style={{ '--row': idx + 1 }} className={time} key={idx}>
          <Text type='body2' font='secondary'>
            {cellToTime(first.meta.start + idx)}
          </Text>
        </li>
      ))}
      {renderItems.map((item) => {
        // const { origin } = new URL(item?.hopin || 'https://hackthevalley.io');
        return (
          <li
            style={{
              '--color': `${item.type.color.r},${item?.type?.color.g},${item?.type?.color.b}`,
              '--row': item.meta.start - first.meta.start + 1,
              '--row-span': item.meta.span,
              '--col': item.meta.colstart + 1,
              '--col-span': item.meta.colspan,
            }}
            className={event}
            key={item.id}
          >
            <Card className={eventCard}>
              <div className={eventBar} />
              <div className={eventContent}>
                <div className={eventDetailsHead}>
                  <Text type='meta1' className={eventTime}>
                    {cellToTime(item.meta.start)}
                  </Text>
                  <Text type='meta1' color='white'>
                    {item.title}
                  </Text>
                </div>
                <Text
                  type='meta1'
                  color='white'
                  lineHeight='relaxed'
                  className={eventDetailsMeta}
                >
                  <span>
                    Location:{' '}
                    <Text
                      type='meta1'
                      color='lime'
                      as='a'
                      href={item.hopin}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {item.location ?? 'Somewhere uwu'}
                    </Text>
                  </span>
                  <span>|</span>
                  <span>
                    Host:{' '}
                    {item.hosts
                      .map(({ name, position }) =>
                        position ? `${name} @ ${position}` : name,
                      )
                      .join(', ') || 'N/A'}
                  </span>
                </Text>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
