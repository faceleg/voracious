module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.target = 'electron-renderer'
            
          return webpackConfig;
        },
      },
};