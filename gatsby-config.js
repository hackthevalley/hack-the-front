const { description, keywords, author } = require('./package.json');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.URL || `http://localhost`,
    title: `Hack The Valley 5`,
    author: author.name,
    description,
    keywords,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
