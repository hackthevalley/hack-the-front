import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import classNames from 'classnames';
import { Link } from 'gatsby';
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
  content,
  body,
  npm,
  form,
  sendEmail,
  emailInstructions,
  link,
  link__signin,
} from './Forgot.module.scss';

export default function Forgot() {
  const { mutate, loading } = useMutate({
    path: '/account/users/reset_password',
    verb: 'POST',
  });
  const [email, setEmail] = useState('');

  function sendInfo() {
    mutate({ email })
    .then((data) => {
      toast.success(`Password reset has been sent to ${email}`);
    })
    .catch((err) => {
      toast.error(`Unable to reset password: ${err?.data?.fallbackMessage}`);
    })
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
          <Text
            className={emailInstructions}
            font='secondary'
            type='meta1'
            color='white'
            lineHeight='spaced'
          >
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </Text>
          <form
            className={form}
            onSubmit={(event) => {
              event.preventDefault();
              sendInfo();
              return false;
            }}
          >
            <Input
              label='Email Address'
              placeholder='Email Address'
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              name='email'
            />
            <div>
              <Button disabled={loading} className={sendEmail}>
                Send Email
              </Button>
            </div>
          </form>
          <Text font='secondary' type='body2'>
            Remember your password?
            <Link to='/login' className={classNames(link, link__signin)}>
              Sign in.
            </Link>
          </Text>
        </div>
      </Section>
    </div>
  );
}
