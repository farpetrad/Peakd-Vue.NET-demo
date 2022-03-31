const path = require("path");

const appbasePath = "./ClientApp/";

const contextPath = path.resolve(__dirname, appbasePath);
const appOutputPath = "./wwwroot/";

module.exports = {
  outputDir: path.resolve(__dirname, appOutputPath),
  chainWebpack: (config) => {
    config.entry("app").clear();
    config.entry("app").add(contextPath + "/main.ts");

    config
          .plugin('html')
          .tap(args => {
              args[0].template = path.resolve(__dirname, appbasePath + '/public/index.html');
              return args;
          })
  },
};
