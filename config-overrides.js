const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");
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
  })
);
