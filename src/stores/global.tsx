import { History } from "history";
import { Ipayload } from "types/stores";
type Isetup = {
  dispatch: any;
  history: History;
};
const state = {
  exclude: ["/", "/login"],
  logo: require("assets/images/bg/logo.jpg"),
  title: "智慧分享平台",
  activeMainMenue: "2",
};
const reducers = {
  SETACTIVEMAINMENUE: (state: any, { payload }: Ipayload) => ({
    ...state,
    activeMainMenue: payload,
  }),
};
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
