const { description, keywords, author } = require('./package.json');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.URL || `http://localhost`,
    startDate: new Date(2023, 9, 13),
    endDate: new Date(2023, 9, 15),
    title: `Hack the Valley 8`,
    author: author.name,
    description,
    keywords,
    featureFlags: {
      mlh: true,
      open: true,
      discord: false,
      rsvp: true,
      schedule: false,
      sponsors: false,
    },
  },
  plugins: [
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableView: 'Grid view',
            tableLinks: ['Sponsors'],
            tableName: `Sponsor Types`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            mapping: { Logo: 'fileNode' },
            tableName: `Sponsors`,
          },
        ],
      },
    },
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
        name: `Hack The Valley 8`,
        short_name: `htv8`,
        start_url: `/`,
        background_color: `#86cd74`,
        theme_color: `#86cd74`,
        display: `minimal-ui`,
        icon: `./node_modules/@htv/ui-kit/assets/icon.png`,
      },
    },
  ],
};
