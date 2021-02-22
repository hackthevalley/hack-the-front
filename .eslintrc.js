module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    __DEV__: true,
  },
  rules: {
    // For React 17
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  extends: `react-app`,
};
