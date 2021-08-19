import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import { navigate, Link } from 'gatsby';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useMutate } from 'restful-react';

import Button from '@htv/ui-kit/components/Button';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import Input from '../../components/Input';
import {
  container,
  backButton,
  header,
  section,
  body,
  npm,
  form,
  controls,
} from './ResetPassword.module.scss';

export default function ResetPasswordForm() {
  if (typeof window === 'undefined') return;

  const [reNewPassword, setReNewPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState();

  const { mutate, loading } = useMutate({
    path: '/account/users/reset_password_confirm',
    verb: 'POST',
  });

  const { search = '' } = window.location;
  const query = search
    .slice(1)
    .split('&')
    .reduce((acc, segment) => {
      const [field, value] = segment.split('=');
      acc[field] = value;
      return acc;
    }, {});

  if (!query.uid || !query.token) {
    toast.error('Password Reset Failed: Invalid payload');
    navigate('/login', { replace: true });
    return null;
  }

  useEffect(() => {
    if (newPassword && reNewPassword) {
      setError(newPassword !== reNewPassword && "Passwords don't match");
    }
  }, [newPassword, reNewPassword]);

  const submit = async () => {
    const id = toast.loading('Loading...');
    try {
      await mutate({
        ...query,
        reNewPassword,
        newPassword,
      });
      toast.success('Password has been successfully reset!', { id });
      navigate('/login');
    } catch (err) {
      toast.error(
        err.data.detail.fieldErrors?.[0].message ??
          'Unable to complete request. Please try again later',
        { id },
      );
    }
  };

  return (
    <div className={container}>
      <Section className={section} backgroundColor='charcoal'>
        <div className={header}>
          <Button
            className={backButton}
            leftIcon={IoChevronBack}
            color='white'
            type='ghost'
            as={Link}
            to='/'
          >
            Back to website
          </Button>
        </div>
        <div className={body}>
          <Text className={npm} type='body1' color='gray' as='p'>
            npm start challenge
          </Text>
          <div>
            <Text font='secondary' type='heading2' weight='normal'>
              Forgot Password?
            </Text>
            <Text font='secondary' type='body1'>
              Reset your password here
            </Text>
          </div>
          <form
            className={form}
            onSubmit={(e) => {
              e.preventDefault();
              submit();
              return false;
            }}
          >
            <Input
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              placeholder='New Password'
              label='New Password'
              name='newPassword'
              type='password'
            />
            <Input
              onChange={(e) => setReNewPassword(e.target.value)}
              value={reNewPassword}
              placeholder='Confirm Password'
              label='Confirm Password'
              name='reNewPassword'
              type='password'
              error={error}
            />
            <div className={controls}>
              <Button
                disabled={!(newPassword && reNewPassword) || error || loading}
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
