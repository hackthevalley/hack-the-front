exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
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
        !/node_modules\/@htv\/(ui-kit)/.test(modulePath),
    },
  ];
  actions.replaceWebpackConfig();
  actions.setWebpackConfig({
    module: {
      rules: [
        // Spinoff of gatsby-plugin-sass
        {
          test: /\.deferred.scss$/,
          use: [
            loaders.file({
              name: `static/[hash:base64:16].css`,
            }),
            loaders.postcss(),
            `sass-loader`,
          ],
        },
      ],
    },
  });
};
