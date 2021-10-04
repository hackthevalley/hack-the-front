import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  // Check payload is good
  const { token } = req.query ?? {};
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

  // Start discord auth process
  const urlSearchParams = new URLSearchParams({
    redirect_url: process.env.DISCORD_REDIRECT_URL,
    client_id: process.env.DISCORD_CLIENT_ID,
    response_type: 'code',
    state: jwt.sign(
      { token },
      process.env.DISCORD_JWT_SECRET,
      // If you take longer than 5 minutes to verify then idk what to tell you
      { expiresIn: 300 },
    ),
    scope: [
      'identify',
    ].join(','),
  });

  return res.redirect(
    301,
    `https://discord.com/api/oauth2/authorize?${urlSearchParams}`,
  );
}
