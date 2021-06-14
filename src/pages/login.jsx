import { useStaticQuery, graphql } from 'gatsby';
import { useEffect } from 'react';

import Layout from '../components/Layout';
import Login from '../sections/Login';

export default function LoginPage() {
  const { site } = useStaticQuery(query);

  useEffect(() => {
    if (!site.siteMetadata.featureFlags.open) {
      navigate('/');
      return null;
    }
  }, [site]);

  return (
    <Layout title='Login' noNav noFooter>
      <Login />
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
