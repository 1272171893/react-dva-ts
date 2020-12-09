import server from "server";
//请求登陆接口
export const getLgoin = (params: any) =>
  server("post", "/user/login", params, "json", true);

//用户信息接口
export const getUserInfo = (params: any) =>
  server("post", "/user/userInfo", params, "json", true);

//请求登陆接口
export const getSetting = (params: any) =>
  server("post", "/user/setting", params, "json", true);
//用户退出接口
export const getLoginOut = (params: any) =>
  server("post", "/user/LoginOut", params, "json", true);
