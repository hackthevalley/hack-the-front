import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Login from '../sections/Login';

export default function LoginPage() {
  const { site } = useStaticQuery(query);

  if (!site.siteMetadata.featureFlags.open) {
    navigate('/');
    return null;
  }

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
