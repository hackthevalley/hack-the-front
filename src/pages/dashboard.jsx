import Layout from '../components/Layout';
import Dashboard from '../sections/Dashboard';
import ApiProvider, { Authenticated } from '../utils/ApiProvider';

export default function DashboardPage() {
  return (
    <Layout title='Dashboard' noNav>
      <ApiProvider authenticated>
        <Dashboard />
      </ApiProvider>
    </Layout>
  );
}
