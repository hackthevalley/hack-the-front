exports.onCreateWebpackConfig = ({ actions, loaders }) => {
    // Include ui-library into the gatsby webpack process
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: modulePath => !modulePath.includes(`@htv/ui-kit`),
                    use: loaders.js()
                },
            ],
        },
    });
};