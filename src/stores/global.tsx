import { History } from "history";
type Isetup = {
  dispatch: any;
  history: History;
};
const state = {
  exclude: ["/", "/login"],
};
const reducers = {};
const effects = {};
const subscriptions = {
  setup({ dispatch, history }: Isetup) {
    history.listen((location, value) => {
      const token: string = window.sessionStorage.getItem("token") || "";
      const pathname: string = location.pathname || "";
      if (!state.exclude.includes(pathname) && token === "") {
        history.push("/login");
        return;
      }
      console.log(location, value);
    });
  },
};

export default {
  namespace: "global",
  state: state,
  reducers: reducers,
  effects: effects,
  subscriptions: subscriptions,
};
