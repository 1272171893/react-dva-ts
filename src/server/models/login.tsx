import server from "server";
//请求登陆接口
export const getLgoin = (params: any) =>
  server("post", "/user/login", params, "json", true);
