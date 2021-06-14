import { useStaticQuery, graphql } from 'gatsby';
import { useEffect } from 'react';

import Layout from '../components/Layout';
import Dashboard from '../sections/Dashboard';

export default function DashboardPage() {
  const { site } = useStaticQuery(query);

  useEffect(() => {
    if (!site.siteMetadata.featureFlags.open) {
      navigate('/');
      return null;
    }
  }, [site]);

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
