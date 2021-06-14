import { graphql, navigate, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';

import Layout from '../components/Layout';
import Consent from '../sections/Application/Consent';
import Demography from '../sections/Application/Demography';
import Experience from '../sections/Application/Experience';
import Form from '../sections/Application/Form';
import Mlh from '../sections/Application/Mlh';
import Personal from '../sections/Application/Personal';
import School from '../sections/Application/School';

export default function DashboardPage() {
  const { site } = useStaticQuery(query);

  useEffect(() => {
    if (!site.siteMetadata.featureFlags.open) {
      navigate('/');
      return null;
    }
  }, [site]);

  return (
    <Layout title='Application' noNav>
      <Form>
        <Personal />
        <School />
        <Demography />
        <Experience />
        <Mlh />
        <Consent />
      </Form>
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
