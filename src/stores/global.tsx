import { History } from "history";
import { Ipayload } from "types/stores";
import { getUserInfo, getSetting } from "server/models/login";
type Isetup = {
  dispatch: any;
  history: History;
};
const state = {
  exclude: ["/", "/login"],
  logo: require("assets/images/bg/logo.png"),
  title: "智慧分享平台",
  useInfo: {},
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
const effects = {
  *setSeting({ payload }: any, { put, call, select }: any) {
    const useInfo = yield select((state: any) => state.global.useInfo);
    const mainMenu = yield select((state: any) => state.global.mainMenu);
    if (Object.keys(useInfo).length === 0) {
      const result = yield call(getUserInfo, { userId: payload });
      if (result.code === 200) {
        yield put({ type: "SETUSEINFO", payload: result.data || {} });
      }
    }
    if (mainMenu.length === 0) {
      const result = yield call(getSetting, { userId: payload });
      if (result.code === 200) {
        yield put({ type: "SETAMAINMENUE", payload: result.data || [] });
      }
    }
  },
};
const subscriptions = {
  setup({ dispatch, history }: Isetup) {
    history.listen((location, value) => {
      if (!Boolean(value)) return;
      const token: string = window.sessionStorage.getItem("token") || "";
      const userId: string = window.sessionStorage.getItem("userId") || "";
      const pathname: string = location.pathname || "";
      if (!state.exclude.includes(pathname) && token === "") {
        history.push("/login");
        return;
      }
      dispatch({ type: "setSeting", payload: userId });
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
