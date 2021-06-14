import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Register from '../sections/Register';

export default function RegisterPage() {
  const { site } = useStaticQuery(query);

  if (!site.siteMetadata.featureFlags.open) {
    navigate('/');
    return null;
  }

  return (
    <Layout title='Register' noNav noFooter>
      <Register />
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
