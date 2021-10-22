import Layout from '../components/Layout';
import Discord from '../sections/Discord';
import ApiProvider from '../utils/ApiProvider';

export default function DiscordPage() {
  return (
    <Layout title='Discord' noNav noFooter>
      <ApiProvider>
        <Discord />
      </ApiProvider>
    </Layout>
  );
}
