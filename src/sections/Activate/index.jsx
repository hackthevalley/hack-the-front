import { navigate } from 'gatsby';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useMutate } from 'restful-react';

import Loading from '../../components/Loading';

export default function Activate() {
  const { mutate } = useMutate({
    path: '/account/users/activation',
    verb: 'POST',
  });

  useEffect(() => {
    mutate(
      location.search
        .slice(1)
        .split('&')
        .reduce((acc, curr) => {
          const [field, value] = curr.split('=');
          acc[field] = value;
          return acc;
        }, {}),
    )
      .then((data) => {
        toast.success('User has been activate. Please login');
      })
      .catch((err) => {
        toast.error(`Unable to activate user: ${err.data.fallbackMessage}`);
      })
      .finally(() => {
        navigate('/login', { replace: true });
      });
  }, []);

  return (
    <Loading
      description='Please wait as we activate your account uwu'
      title='Loading...'
      isLoading
    />
  );
}
