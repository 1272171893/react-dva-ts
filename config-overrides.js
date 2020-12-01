const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");
const rewirepostcss = require("react-app-rewire-postcss");
const px2rem = require("postcss-px2rem-exclude");
const invade = (target, name, callback) => {
  target.forEach((item) => {
    if (item.constructor.name === name) {
      callback(item);
    }
  });
};
module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addLessLoader({
    javascriptEnabled: true,
    strictMath: true,
    noIeCompat: true,
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[name]__[local]___[hash:base64:5]",
      },
      sourceMap: true,
    },
  }),
  addWebpackAlias({
    src: path.resolve(__dirname, "./src"),
    assets: path.resolve(__dirname, "./src/assets"),
    components: path.resolve(__dirname, "./src/components"),
    pages: path.resolve(__dirname, "./src/pages"),
    routes: path.resolve(__dirname, "./src/routes"),
    server: path.resolve(__dirname, "./src/server"),
    stores: path.resolve(__dirname, "./src/stores"),
    types: path.resolve(__dirname, "./src/types"),
    utils: path.resolve(__dirname, "./src/utils"),
    mocks: path.resolve(__dirname, "./src/mocks"),
  }),
  (config, env) => {
    rewirepostcss(config, {
      plugins: (loader) => [
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 3,
        }),
        px2rem({
          remUnit: 100,
          exclude: /node_modules/i,
        }),
      ],
    });
    if (process.env.NODE_ENV === "production") {
      config.devtool = false;
      invade(config.optimization.minimizer, "TerserPlugin", (e) => {
        e.options.extractComments = false;
        e.options.terserOptions.compress.drop_console = true;
      });
    }
    return config;
  }
);
