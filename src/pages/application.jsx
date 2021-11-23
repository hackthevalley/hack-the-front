import Layout from '../components/Layout';
import { FormProvider } from '../sections/Application/Form/FormContext';
import ApiProvider from '../utils/ApiProvider';
import ApplicationForm from '../sections/Application';

export default function DashboardPage() {
  return (
    <Layout title='Application' noNav>
      <ApiProvider authenticated>
        <FormProvider>
          <ApplicationForm/>
        </FormProvider>
      </ApiProvider>
    </Layout>
  );
}
