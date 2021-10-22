import Layout from '../components/Layout';
import Activate from '../sections/Activate';
import ApiProvider from '../utils/ApiProvider';

export default function ActivatePage() {
  return (
    <Layout title='Activate' noNav noFooter>
      <ApiProvider>
        <Activate />
      </ApiProvider>
    </Layout>
  );
}
