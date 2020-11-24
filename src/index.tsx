import dva from "dva";
import { createBrowserHistory } from "history";
import { setHtmlSize } from "assets/js/rem";
import "assets/styles/normalize.less";
import "assets/styles/common.less";
import "assets/iconfonts/iconfont.css";
import "antd/dist/antd.css";
setHtmlSize(window, document);
const app = dva({
  history: createBrowserHistory(),
});
app.model(require("stores/global").default);
app.router(require("routes").default);
app.start("#root");
