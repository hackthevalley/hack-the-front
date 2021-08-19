import Layout from '../components/Layout';
import ResetPasswordForm from '../sections/ResetPassword';
import ApiProvider from '../utils/ApiProvider';

export default function ResetPassword() {
  return (
    <Layout title='Reset Password' noNav noFooter>
      <ApiProvider>
        <ResetPasswordForm />
      </ApiProvider>
    </Layout>
  );
}
