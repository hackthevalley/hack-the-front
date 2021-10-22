import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const query = graphql`
  {
    site {
      siteMetadata {
        description
        keywords
        author
        title
      }
    }
  }
`;

export default function SEO({ lang = `en`, title = ``, meta = [] }) {
  const { site } = useStaticQuery(query);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title ? '%s | ' : ''}${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords.join(','),
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ].concat(meta)}
    />
  );
}

SEO.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
