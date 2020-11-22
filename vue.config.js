module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Freddie Nelson";
      return args;
    });
  },
};
