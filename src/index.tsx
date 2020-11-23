import dva from "dva";
import { createBrowserHistory } from "history";
console.log(require("routes").default)
const app = dva({
  history: createBrowserHistory(),
});
app.model(require("stores/global").default);
app.router(require("routes").default);
app.start("#root");
