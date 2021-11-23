const { siteMetadata } = require('./gatsby-config');
const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``));
const isProd = process.env.NODE_ENV === `production`;

exports.onCreatePage = ({ page, actions }) => {
  // Remove pages protected by featureFlag
  if (isProd && !siteMetadata.featureFlags.open) {
    if (
      ['/application', '/dashboard', '/activate', '/forgot', '/reset_password', '/register', '/login'].includes(
        replacePath(page.path),
      )
    ) {
      actions.deletePage(page);
    }
  }

  if (isProd && !siteMetadata.featureFlags.schedule) {
    if (['/schedule'].includes(replacePath(page.path))) {
      actions.deletePage(page);
    }
  }
  
  if (isProd && !siteMetadata.featureFlags.discord) {
    if (['/discord'].includes(replacePath(page.path))) {
      actions.deletePage(page);
    }
  }
};

exports.onCreateWebpackConfig = ({ actions, stage, loaders, getConfig }) => {
  const isSSR = [`develop-html`, `build-html`].includes(stage);
  const config = getConfig();

  config.module.rules = [
    ...config.module.rules.filter(
      (rule) => String(rule.test) !== String(/\.jsx?$/),
    ),
    {
      ...loaders.js(),
      test: /\.(js|jsx)?$/,
      exclude: (modulePath) =>
        /node_modules/.test(modulePath) &&
        !/@htv(\/|\\)(ui-kit)/.test(modulePath),
    },
    {
      oneOf: [
        {
          test: /\.module\.scss$/,
          use: [
            !isSSR && loaders.miniCssExtract({ modules: true }),
            loaders.css({
              importLoaders: 2,
              modules: {
                localIdentName: isProd
                  ? `[hash:base64:8]`
                  : `[name]__[local]--[hash:base64:8]`,
              },
            }),
            loaders.postcss(),
            require.resolve(`sass-loader`),
          ].filter(Boolean),
        },
        {
          test: /\.deferred\.scss$/,
          use: [
            loaders.file({
              name: `static/[hash:base64:8].css`,
            }),
            loaders.postcss(),
            `sass-loader`,
          ],
        },
      ],
    },
  ];
  actions.replaceWebpackConfig();
};
