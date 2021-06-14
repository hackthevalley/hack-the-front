import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Dashboard from '../sections/Dashboard';

export default function DashboardPage() {
  const { site } = useStaticQuery(query);

  if (!site.siteMetadata.featureFlags.open) {
    navigate('/');
    return null;
  }

  return (
    <Layout title='Dashboard' noNav>
      <Dashboard />
    </Layout>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        featureFlags {
          open
        }
      }
    }
  }
`;
