import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import Section from "@htv/ui-kit/components/Section";
import Button from "@htv/ui-kit/components/Button";
import Text from "@htv/ui-kit/components/Text";

import Facebook from '../../components/Facebook';
import Google from '../../components/Google';
import Input from '../../components/Input';
import { useReducer } from "react";

import {
  container,
  section,
  back,
  content,
  npm,
  body,
  socials,
  line,
  form,
  form__full,
} from './Register.module.scss';

const initState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm: '',
};

function reducer(state, { target }) {
  return {
    ...state,
    [target.name]: target.value,
  };
}

export default function Register() {
  const [ store, dispatch ] = useReducer(reducer, initState);
  return (
    <div className={container}>
      <Section className={section} backgroundColor='charcoal'>
        <Button className={back} leftIcon={IoChevronBack} type='ghost' color='white'>
          Back to website
        </Button>
        <div className={content}>
          <Text className={npm} type='body1' color='gray'>
            npm start challenge
          </Text>
          <Text type='heading2' font='secondary' as='p'>
            Hi There,
          </Text>
          <div className={body}>
            <div>
              <Text type='body1' font='secondary' as='p'>
                Create an account to register
              </Text>
              <div className={socials}>
                <Google>
                  Continue with Google
                </Google>
                <Facebook>
                  Continue with Facebook
                </Facebook>
              </div>
            </div>
            <div className={line}/>
            <form className={form}>
              <Text className={form__full} font='secondary' type='body1'>
                Create account with an Email
              </Text>
              <Input onChange={dispatch} value={store.first_name} label='First Name' placeholder='first name' name='first_name'/>
              <Input onChange={dispatch} value={store.last_name}  label='Last Name' placeholder='last name' name='last_name'/>
              <Input className={form__full} onChange={dispatch} value={store.email} label='Email' placeholder='email' name='email' type='email'/>
              <Input onChange={dispatch} value={store.password} label='Password' placeholder='password' name='password' type='password'/>
              <Input onChange={dispatch} value={store.confirm} label='Confirm Password' placeholder='confirm password' name='confirm' type='password'/>
              <Button>
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}