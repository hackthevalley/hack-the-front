import { navigate } from 'gatsby';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { RestfulProvider } from 'restful-react';

import Loading from '../components/Loading';

async function refreshToken() {
  const jwt = JSON.parse(localStorage.getItem('auth'));
  const newJwt = await fetchApi('/account/auth/token/refresh', {
    body: JSON.stringify({ token: jwt.token }),
    method: 'POST',
  });
  localStorage.setItem(
    'auth',
    JSON.stringify(newJwt),
  );
  return newJwt;
}

export async function getJwt() {
  // For gatsby SSR
  if (!window) return {};

  try {
    let jwt = JSON.parse(localStorage.getItem('auth') ?? null);
    const now = new Date();

    if (!jwt) return;

    // If jwt is expired
    if (new Date(jwt.payload.exp * 1000) < now) {
      try {
        jwt = await refreshToken();
      } catch (err) {
        localStorage.removeItem('auth');
        toast('Session has expired. Please sign in again');
        return navigate('/login', { replace: true });
      }
    }

    return jwt;
  } catch (err) {
    toast.error('Unexpected auth error. Please sign in again');
    return navigate('/login', { replace: true });
  }
}

export async function fetchApi(path, options = {}) {
  const headers =
    options.headers === null
      ? {}
      : {
          'content-type': 'application/json',
          ...options.headers,
        };

  const jwt = JSON.parse(localStorage.getItem('auth') ?? null);
  if (jwt) {
    headers.authorization = `JWT ${jwt.token}`;
  }

  const res = await fetch(`${process.env.GATSBY_API_URL}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw await res.json();
  }
  if (res.status !== 204) {
    return res.json();
  }
}

export default function ApiProvider({ authenticated, children }) {
  const [loading, setLoading] = useState(authenticated);

  useEffect(() => {
    if (authenticated) {
      let timer;

      getJwt().then((jwt) => {
        if (!jwt) {
          toast.error('User not authenticated. Please sign in');
          return navigate('/login');
        }

        setLoading(false);
        timer = window.setInterval(refreshToken, 60000);
      });

      return () => {
        window.clearInterval(timer);
      };
    }
  }, [authenticated]);

  return (
    <RestfulProvider
      base={process.env.GATSBY_API_URL}
      requestOptions={() => {
        if (!window) return {};
        const jwt = JSON.parse(localStorage.getItem('auth') ?? null);

        if (!jwt) return {};
        return {
          headers: {
            Authorization: `JWT ${jwt?.token}`,
          },
        };
      }}
    >
      <Loading
        description="You're page would be ready soon owo"
        title='Loading...'
        isLoading={loading}
      >
        {children}
      </Loading>
    </RestfulProvider>
  );
}
