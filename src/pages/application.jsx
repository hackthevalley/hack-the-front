import Layout from '../components/Layout';
import Consent from '../sections/Application/Consent';
import Demography from '../sections/Application/Demography';
import Experience from '../sections/Application/Experience';
import Form from '../sections/Application/Form';
import { FormProvider } from '../sections/Application/Form/FormContext';
import Mlh from '../sections/Application/Mlh';
import Personal from '../sections/Application/Personal';
import School from '../sections/Application/School';
import ApiProvider from '../utils/ApiProvider';

export default function DashboardPage() {
  return (
    <Layout title='Application' noNav>
      <ApiProvider authenticated>
        <FormProvider>
          <Form>
            <Personal />
            <School />
            <Demography />
            <Experience />
            <Mlh />
            <Consent />
          </Form>
        </FormProvider>
      </ApiProvider>
    </Layout>
  );
}
