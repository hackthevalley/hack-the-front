import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import classNames from 'classnames';
import { Link, navigate } from 'gatsby';
import { useState } from 'react';
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
  signIn,
  body,
  npm,
  line,
  content,
  passwordField,
  form,
  link,
  link__forgot,
  link__signup,
} from './Login.module.scss';

export default function Login() {
  const { mutate, loading } = useMutate({
    path: '/account/auth/token/create/basic',
    verb: 'POST',
  });
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submit = async () => {
    const loadingToast = toast.loading('Logging in...');
    try {
      const jwt = await mutate({ email, password });
      localStorage.setItem(
        'auth',
        JSON.stringify({
          ...jwt,
          version: process.env.GATSBY_API_VERSION,
        }),
      );
      toast.dismiss(loadingToast);
      navigate('/dashboard');
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('Unable to login. Please try again');
    }
  };

  return (
    <div className={container}>
      <Section className={content} backgroundColor='charcoal'>
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
              Welcome,
            </Text>
            <Text font='secondary' type='body1'>
              Sign in to view dashboard
            </Text>
            {/*<div className={socials}>
              <Google>Sign in with Google</Google>
              <Facebook>Sign in with Facebook</Facebook>
            </div>*/}
          </div>
          <hr className={line} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
              return false;
            }}
            className={form}
          >
            <Input
              label='Email Address'
              placeholder='email'
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              name='email'
            />
            <Input
              label='Password'
              placeholder='password'
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              name='password'
              type='password'
              className={passwordField}
            />
            {/*
              <Text
                font='secondary'
                to='/forgot'
                type='meta1'
                color='white'
                className={classNames(link, link__forgot)}
                as={Link}
              >
                Forgot Password?
              </Text>
            */}
            <div>
              <Button
                disabled={!email || !password || loading}
                className={signIn}
              >
                Sign in
              </Button>
            </div>
          </form>
          <Text font='secondary' type='body2'>
            Don't have an account?{' '}
            <Link to='/register' className={classNames(link, link__signup)}>
              Sign up
            </Link>
            .
          </Text>
        </div>
      </Section>
    </div>
  );
}
