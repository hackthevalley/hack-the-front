module.exports = {
    ci: {
      preset: 'lighthouse:recommended',
      collect: {
        url: [`http://localhost`],
        staticDistDir: './public',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };