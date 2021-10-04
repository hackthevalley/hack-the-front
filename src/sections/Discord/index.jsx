import { navigate } from 'gatsby-link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import Loading from '../../components/Loading';

export default function Discord() {
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    fetch('/api/discord/verify', {
      method: 'POST',
      body: JSON.stringify({
        state: params.get('state'),
        code: params.get('code'),
      }),
    })
      .then(res => res.json())
      .then(({ state, message }) => {
        if (state === 'error') {
          toast.error(message);
        } else {
          toast.success(message);
        }
      }).finally(() => navigate('/dashboard'));
  }, []);

  return (
    <Loading
      description='Please wait as we link your discord account'
      title='Loading...'
      isLoading
    />
  );
}
