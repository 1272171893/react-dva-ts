const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  }),
  addWebpackAlias({
    src: path.resolve(__dirname, "./src"),
    assets: path.resolve(__dirname, "./src/assets"),
    components: path.resolve(__dirname, "./src/components"),
    pages: path.resolve(__dirname, "./src/pages"),
    routers: path.resolve(__dirname, "./src/routers"),
    server: path.resolve(__dirname, "./src/server"),
    stores: path.resolve(__dirname, "./src/stores"),
    types: path.resolve(__dirname, "./src/types"),
    utils: path.resolve(__dirname, "./src/utils"),
  })
);
