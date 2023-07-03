import Loading from '../../components/Loading';
import Consent from './Consent';
import Demography from './Demography';
import Experience from './Experience';
import Form from './Form';
import Mlh from './Mlh';
import Personal from './Personal';
import School from './School';
import General from './General';
import SkillConfidence from './SkillConfidence';
import { useGet } from 'restful-react';

export default function ApplicationForm() {
  const { loading, data } = useGet({ path: '/account/users/me' });
  return (
    <Loading
      title="owo wats dis?"
      description="Preparing your application..."
      isLoading={loading}
    >
      <Form>
        <Personal userInfo={data}/>
        <School />
        <Demography />
        <Experience />
        <SkillConfidence />
        <General />
        <Mlh />
        <Consent />
      </Form>
    </Loading>
  );
}