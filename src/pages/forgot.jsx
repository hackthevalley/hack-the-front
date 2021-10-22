import Layout from '../components/Layout';
import Forgot from '../sections/Forgot';
import ApiProvider from '../utils/ApiProvider';

export default function ForgotPage() {
  return (
    <Layout title='Forgot' noNav noFooter>
      <ApiProvider>
        <Forgot />
      </ApiProvider>
    </Layout>
  );
}
