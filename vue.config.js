module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.module
      .rule('worker')
      .test(/_worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .tap(options => ({ inline: true }))
      .end();
  },
};
