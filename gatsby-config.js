const { description, keywords, author } = require('./package.json');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.URL || `http://localhost`,
    startDate: new Date(2021, 10, 15),
    endDate: new Date(2021, 10, 17),
    title: `Hack The Valley 5`,
    author: author.name,
    description,
    keywords,
    featureFlags: {
      mlh: false,
      open: false,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hack The Valley 5`,
        short_name: `htv5`,
        start_url: `/`,
        background_color: `#86cd74`,
        theme_color: `#86cd74`,
        display: `minimal-ui`,
        icon: `./node_modules/@htv/ui-kit/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
