import Layout from '../components/Layout';
import Login from '../sections/Login';
import ApiProvider from '../utils/ApiProvider';

export default function LoginPage() {
  return (
    <Layout title='Login' noNav noFooter>
      <ApiProvider>
        <Login />
      </ApiProvider>
    </Layout>
  );
}
