import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { useState } from 'react';

import Button from '@htv/ui-kit/components/Button';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import Facebook from '../../components/Facebook';
import Google from '../../components/Google';
import Input from '../../components/Input';
import {
  container,
  backButton,
  header,
  signIn,
  body,
  npm,
  socials,
  line,
  content,
  passwordField,
  form,
  link,
  link__forgot,
  link__signup,
} from './Login.module.scss';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function sendInfo(event) {
    event.preventDefault();
    console.log('password and username sent here..');
  }

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
            <Text type='meta1' as='span' color='white'>
              Back to website
            </Text>
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
            <div className={socials}>
              <Google>Sign in with Google</Google>
              <Facebook>Sign in with Facebook</Facebook>
            </div>
          </div>
          <hr className={line} />
          <form className={form} onSubmit={sendInfo}>
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
            {/*<Text
              font='secondary'
              to='/forgot'
              type='meta1'
              color='white'
              className={classNames(
                link,
                link__forgot,
              )}
              as={Link}
            >
              Forgot Password?
              </Text>*/}
            <div>
              <Button className={signIn}>Sign in</Button>
            </div>
          </form>
          <Text font='secondary' type='body2'>
            Don't have an account?
            <Link to='/register' className={classNames(link, link__signup)}>
              Sign up.
            </Link>
          </Text>
        </div>
      </Section>
    </div>
  );
}
