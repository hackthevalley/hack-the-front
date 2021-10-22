import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { useReducer, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useMutate } from 'restful-react';

import Button from '@htv/ui-kit/components/Button';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import Input from '../../components/Input';
import {
  container,
  section,
  back,
  content,
  npm,
  body,
  form,
  form__full,
  controls,
  link,
  btn,
} from './Register.module.scss';

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const initState = () => ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  rePassword: '',
  _errors: {},
});

function reducer(state, update) {
  if (!update) return initState();
  return { ...state, ...update };
}

export default function Register() {
  const [store, dispatch] = useReducer(reducer, {}, initState);
  const [errors, setErrors] = useReducer(reducer, {});
  const { mutate, loading } = useMutate({
    path: '/account/users',
    verb: 'POST',
  });

  const submit = async () => {
    const { _errors, ...input } = store;
    toast.promise(mutate(input), {
      loading: 'Registering user...',
      success: () => {
        dispatch(null);
        return `Success! An email confirmation has been sent to ${input.email}`;
      },
      error: ({ data }) => {
        setErrors(null);
        setErrors(
          data.detail.fieldErrors.reduce((acc, field) => {
            acc[field.field] = field.message;
            return acc;
          }, {}),
        );
        return 'Error: Unable to register user';
      },
    });
  };

  const applyField = (field) => ({
    onChange: ({ target }) => {
      setErrors({ [field]: false });
      dispatch({ [field]: target.value });
    },
    error: errors[field],
    value: store[field],
    name: field,
  });

  useEffect(() => {
    setErrors({
      rePassword:
        [
          store.rePassword,
          store.password,
          store.password !== store.rePassword,
        ].every(Boolean) && "The two passwords don't match",
      email:
        [store.email, !emailRegex.test(store.email)].every(Boolean) &&
        'Invalid email format',
    });
  }, [store]);

  const hasErrors = Object.values(errors).some(Boolean);
  const isComplete = [
    store.firstName,
    store.lastName,
    store.email,
    store.password,
    store.rePassword,
  ].every(Boolean);

  return (
    <div className={container}>
      <Section className={section} backgroundColor='charcoal'>
        <Button
          as={Link}
          to='/'
          className={back}
          leftIcon={IoChevronBack}
          type='ghost'
          color='white'
        >
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
            <Text type='body1' font='secondary' as='p'>
              Create an account to register
            </Text>
            <form
              className={form}
              onSubmit={(e) => {
                e.preventDefault();
                submit();
                return false;
              }}
            >
              <Input
                {...applyField('firstName')}
                label='First Name'
                placeholder='first name'
                autoComplete='given-name'
                required
              />
              <Input
                {...applyField('lastName')}
                label='Last Name'
                placeholder='last name'
                autoComplete='family-name'
                required
              />
              <Input
                className={form__full}
                {...applyField('email')}
                label='Email'
                placeholder='email'
                type='email'
                autoComplete='email'
                required
              />
              <Input
                {...applyField('password')}
                label='Password'
                placeholder='password'
                type='password'
                autoComplete='new-password'
                required
              />
              <Input
                {...applyField('rePassword')}
                label='Confirm Password'
                placeholder='confirm password'
                autoComplete='off'
                type='password'
                required
              />
              <div className={classNames(form__full, controls)}>
                <Button
                  disabled={loading || hasErrors || !isComplete}
                  className={btn}
                >
                  Sign Up
                </Button>
                <Text as='p' type='meta1'>
                  Already have an account?{' '}
                  <Link className={link} to='/login'>
                    Sign in
                  </Link>
                  .
                </Text>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
