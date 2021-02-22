const { description, keywords, author } = require('./package.json');
const isProd = process.env.NODE_ENV === `production`;

module.exports = {
  siteMetadata: {
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleTest: /\.((?!deferred).)\.scss$/,
        cssLoaderOptions: Object.assign(
          {
            camelCase: false,
          },
          // Uglify the classnames for production
          isProd && {
            localIdentName: `[hash:base64:8]`,
          },
        ),
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
