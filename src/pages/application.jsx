import Layout from '../components/Layout';
import Form from '../sections/Application/Form';
import Personal from '../sections/Application/Personal';
import School from '../sections/Application/School';
import Demography from '../sections/Application/Demography';
import Experience from '../sections/Application/Experience';
import Mlh from '../sections/Application/Mlh';
import Consent from '../sections/Application/Consent';

export default function DashboardPage() {
  return (
    <Layout title='Application' noNav>
      <Form>
        <Personal/>
        <School/>
        <Demography/>
        <Experience/>
        <Mlh/>
        <Consent/>
      </Form>
    </Layout>
  );
}
