import Layout from '../components/Layout';
import Register from '../sections/Register';
import ApiProvider from '../utils/ApiProvider';

export default function RegisterPage() {
  return (
    <Layout title='Register' noNav noFooter>
      <ApiProvider>
        <Register />
      </ApiProvider>
    </Layout>
  );
}
