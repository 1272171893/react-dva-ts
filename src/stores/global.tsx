import { History } from "history";
import { Ipayload } from "types/stores";
type Isetup = {
  dispatch: any;
  history: History;
};
const state = {
  exclude: ["/", "/login"],
  logo: require("assets/images/bg/logo.png"),
  title: "智慧分享平台",
  useInfo:{},
  mainMenu: [
    { code: "data_1", name: "数据展示1" },
    { code: "data_2", name: "数据展示2" },
    { code: "data_3", name: "数据展示3" },
    { code: "data_4", name: "数据展示4" },
    { code: "data_5", name: "数据展示5" },
  ],
  activeMainMenue: "data_1",
  subMenue: [],
  activeSubMenue: "/",
};
const reducers = {
  SETAMAINMENUE: (state: any, { payload }: Ipayload) => ({
    ...state,
    mainMenu: payload,
  }),
  SETACTIVEMAINMENUE: (state: any, { payload }: Ipayload) => ({
    ...state,
    activeMainMenue: payload,
  }),
  SETSUBMENUE: (state: any, { payload }: Ipayload) => ({
    ...state,
    subMenue: payload,
  }),
  SETACTIVESUBMENUE: (state: any, { payload }: Ipayload) => ({
    ...state,
    activeSubMenue: payload,
  }),
  SETUSEINFO: (state: any, { payload }: Ipayload) => ({
    ...state,
    useInfo: payload,
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
