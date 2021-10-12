import Airtable from 'airtable';
import fetch from 'node-fetch';

console.log(fetch);

const base = new Airtable({
  apiKey: process.env.DISCORD_AIRTABLE_API_KEY
}).base(process.env.DISCORD_AIRTABLE_BASE);

export default async function handler(req, res) {
  const token = req.headers.authorization.slice(4);
  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Missing token',
    });
  }

  // Verify payload
  const userInfo = await fetch(
    `${process.env.GATSBY_API_URL}/account/auth/token/verify`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
      method: 'POST',
    },
  ).then(_res => _res.json());

  if (!userInfo.payload) {
    console.error(`Invalid token: ${token}`);
    return res.status(403).json({
      status: 'error',
      message: 'Invalid token',
    });
  }

  // Get info
  const [ record = {} ] = await base('User Mapping').select({
    filterByFormula: `{Email} = "${userInfo.payload.email}"`,
    maxRecords: 1,
  }).all();

  const fields = record.fields;

  res.status(200).json({
    status: 'success',
    message: fields ? {
      lastUpdated: fields['Last Modified'][0],
      tag: fields['Discord Name'][0],
      avatar: fields['Avatar'][0],
    } : null,
  })
}
