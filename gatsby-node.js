exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    // Include ui-library into the gatsby webpack process
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: (modulePath) => !modulePath.includes(`@htv/ui-kit`),
          use: loaders.js(),
        },
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
