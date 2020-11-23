import dva from "dva";
import { createBrowserHistory } from "history";
const app = dva({
  history: createBrowserHistory(),
});
app.model(require("stores/global").default);
app.router(require("routes").default);
app.start("#root");
