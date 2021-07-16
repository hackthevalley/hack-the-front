import Button from '@htv/ui-kit/components/Button';
import Card from '@htv/ui-kit/components/Card';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { createContext, useReducer } from 'react';

import {
  card,
  container,
  content,
  footer,
  header,
  npm,
} from './Form.module.scss';

const reducer = (state, newState) => ({ ...state, ...newState });

const defaultForm = () => ({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  country: '',
  school: '',
  major: '',
  level_of_study: '',
  expected_graduation: '',
  age: '',
  gender: '',
  race: '',
  number_of_hackathons: '',
  github: '',
  linkedin: '',
  resume: null,
  code_of_conduct_confirm: false,
  privacy_confirm: false,
  email_consent_confirm: false,
  media_consent_confirm: false,
});

const defaultValidity = () => ({
  personal: false,
  school: false,
  demography: false,
  experience: false,
  mlh: false,
  consent: false,
});

export const ValidityContext = createContext(defaultValidity());
export const FormContext = createContext(defaultForm());
export const ActionsContext = createContext({});

export default function Form({ children }) {
  const [validity, setValidity] = useReducer(reducer, {}, defaultValidity);
  const [store, setForm] = useReducer(reducer, {}, defaultForm);

  const submit = async () => {};

  return (
    <Section backgroundColor='charcoal' className={container}>
      <div className={content}>
        <Text className={npm} type='body1' color='gray'>
          npm start challenge
        </Text>
        <div className={header}>
          <Text type='heading2' font='secondary' as='h1'>
            Application
          </Text>
          <Button type='ghost' color='white' leftIcon={FaAngleLeft}>
            Back to Dashboard
          </Button>
        </div>
        <Card className={card}>
          <Text type='body1' font='secondary'>
            Please fill out all mandatory Fields.
          </Text>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
              return false;
            }}
          >
            <ActionsContext.Provider
              value={{
                setValidity,
                setForm,
              }}
            >
              <ValidityContext.Provider value={validity}>
                <FormContext.Provider value={store}>
                  {children}
                </FormContext.Provider>
              </ValidityContext.Provider>
            </ActionsContext.Provider>
            <div className={footer}>
              <Button disabled={!Object.values(validity).every(Boolean)}>
                Submit Application
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}
