import jwt from 'jsonwebtoken';
import Airtable from 'airtable';
const fetch = require("node-fetch");

const base = new Airtable({
  apiKey: process.env.DISCORD_AIRTABLE_API_KEY
}).base(process.env.DISCORD_AIRTABLE_BASE);

function getDiscordAccessToken(code) {
  return fetch(
    'https://discord.com/api/v8/oauth2/token',
    {
      method: 'POST',
      body: new URLSearchParams({
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        redirect_uri: process.env.DISCORD_REDIRECT_URL,
        client_id: process.env.DISCORD_CLIENT_ID,
        grant_type: 'authorization_code',
        code,
      }),
    },
  ).then(_res => _res.json());
}

function getDiscordUser(auth) {
  return fetch(
    'https://discord.com/api/v8/users/@me',
    {
      headers: {
        'Authorization': `${auth.token_type} ${auth.access_token}`,
      },
    },
  ).then(_res => _res.json());
}

export default async function handler(req, res) {
  // Check payload
  const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { state, code } = payload ?? {};
  if (!state || !code) {
    return res.status(200).json({
      state: 'error',
      message: 'Missing state and/or code',
    });
  }

  // Verify state (No funny business here)
  let userInfo;
  try {
    const { token } = jwt.verify(state, process.env.DISCORD_JWT_SECRET);
    userInfo = jwt.decode(token);
  } catch (err) {
    console.error(err);
    return res.status(200).json({
      state: 'error',
      message: 'Unable to verify state',
    });
  }

  // Verify Discord auth
  const discordAuth = await getDiscordAccessToken(code);
  if (discordAuth.error) {
    console.error(discordAuth.error);
    return res.status(200).json({
      state: 'error',
      message: 'Failed to retrieve Discord token',
    });
  }

  // Get discord user info
  const discordUser = await getDiscordUser(discordAuth);

  if (discordUser.error) {
    console.error(discordUser.error);
    return res.status(200).json({
      state: 'error',
      message: 'Failed to retrieve Discord user',
    });
  }

  // Get info
  const [ oldRecord ] = await base('User Mapping').select({
    filterByFormula: `{Email} = "${userInfo.email}"`,
    maxRecords: 1,
  }).all();

  // Store discord info
  const fields = {
    'Avatar': [{
      url: `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.webp`,
    }],
    'Discord Name': `${discordUser.username}#${discordUser.discriminator}`,
    'Auth': JSON.stringify(discordAuth),
    'Discord ID': discordUser.id,
  };

  if (oldRecord) {
    const lastDiscordId = oldRecord.fields['Discord Info'][0];
    await Promise.all([
      fetch(
        `https://discord.com/api/v8/guilds/${process.env.DISCORD_GUILD}/members/${discordUser.id}/roles/${process.env.DISCORD_ROLE}`,
        {
          method: 'PUT',
          headers: {
            'X-Audit-Log-Reason': `[HACKER-DASHBOARD] Updating old user ${lastDiscordId} by ${userInfo.email}`,
            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
          },
        },
      ),
      fetch(
        `https://discord.com/api/v8/guilds/${process.env.DISCORD_GUILD}/members/${lastDiscordId}/roles/${process.env.DISCORD_ROLE}`,
        {
          method: 'DELETE',
          headers: {
            'X-Audit-Log-Reason': `[HACKER-DASHBOARD] Replaced by user ${discordUser.id} by ${userInfo.email}`,
            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
          },
        },
      ),
      base('Discord Info').update([{
        id: lastDiscordId,
        fields,
      }]),
    ]);
    res.status(200).json({
      state: 'success',
      message: 'Discord info has been updated',
    });
  } else {
    const record = await base('Discord Info').create([{ fields }]);
    await Promise.all([
      fetch(
        `https://discord.com/api/v8/guilds/${process.env.DISCORD_GUILD}/members/${discordUser.id}/roles/${process.env.DISCORD_ROLE}`,
        {
          method: 'PUT',
          headers: { 
            'X-Audit-Log-Reason': `[HACKER-DASHBOARD] Verifying ${userInfo.email} for first time`,
            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
          },
        },
      ),
      base('User Mapping').create([{
        fields: {
          'Discord Info': record.map(_record => _record.getId()),
          'Email': userInfo.email,
        },
      }]),
  ]);
    res.status(200).json({
      state: 'success',
      message: 'Discord info has been added',
    });
  }
}
