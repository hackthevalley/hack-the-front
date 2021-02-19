module.exports = {
    "presets": [
        "babel-preset-gatsby",
        [
            "@babel/preset-react",
            {
                "runtime": "automatic",
            },
        ],
    ],
    "plugins": [
        "babel-plugin-dev-expression",
    ],
};