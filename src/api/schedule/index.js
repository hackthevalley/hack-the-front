import Airtable from 'airtable';
import Color from 'color';





const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_SCHEDULE_BASE_ID);

const checkSameDay = (d1, d2) => {
  return d1.split('T')[0] === d2.split('T')[0];
};

export default async function handler(req, res) {
  const [_events, _metadata] = await Promise.all([
    base('Events')
      .select({
        filterByFormula: '{Active} = TRUE()',
        sort: [{ field: 'Start' }, { field: '_Duration' }],
      })
      .all(),
    base('Metadata').select().all(),
  ]);

  const metadata = _metadata.reduce((acc, meta) => {
    switch (meta.fields['Data Type']) {
      case 'Boolean':
        acc[meta.fields.Key] = meta.fields.Value === 'true';
        break;
      case 'DateTime':
        acc[meta.fields.Key] = new Date(meta.fields.Value);
        break;
      case 'Float':
        acc[meta.fields.Key] = parseFloat(meta.fields.Value);
        break;
      case 'Integer':
        acc[meta.fields.Key] = parseInt(meta.fields.Value);
        break;
      case 'String':
        acc[meta.fields.Key] = meta.fields.Value;
        break;
      default:
        console.error(
          `Unknown Type ${meta.fields['Data Type']} for ${meta.fields.Key}`,
        );
        break;
    }
    return acc;
  }, {});
  metadata.DAY_SPAN = 1440 / metadata.MINUTES_PER_CELL;

  const getDateTimeSpan = (date) => {
    const [hours, minutes] = date.split('T')[1].split(':');
    return (
      (parseInt(hours) * 60 + parseInt(minutes)) / metadata.MINUTES_PER_CELL
    );
  };
  const events = _events.reduce((acc, event) => {
    const isSameDay = checkSameDay(event.fields['Start'], event.fields['End']);
    acc[event.fields['_Day']] = acc[event.fields['_Day']] ?? [];
    acc[event.fields['_Day']].push({
      title: event.fields['Title'],
      description: event.fields?.['Description'],
      hopin: event.fields?.['Hopin Link'],
      location: event.fields?.['Location'],
      start: event.fields['Start'],
      end: event.fields['End'],
      id: event.id,
      meta: {
        span: event.fields['_Duration'] / metadata.MINUTES_PER_CELL,
        start: getDateTimeSpan(event.fields['Start']),
        end:
          getDateTimeSpan(event.fields['End']) +
          (isSameDay ? 0 : metadata.DAY_SPAN),
        duration: event.fields['_Duration'],
      },
      type: {
        name: event.fields?.['Name (From Type)'],
        color: Color(event.fields['Color (from Type)']?.[0]).object(),
      },
      hosts: (event.fields['Name (from Hosts)'] ?? []).map((name, idx) => ({
        position: event.fields?.['Position (from Hosts)']?.[idx],
        id: event.fields?.['Hosts']?.[idx],
        name,
      })),
    });
    return acc;
  }, {});

  res.status(200).json({
    events,
    metadata,
  });
};