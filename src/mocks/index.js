// import Mock from "mockjs";
// export const login = Mock.mock(`user/login`, (data: any) => {
//   return true;
// });
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//登陆接口
app.post("/user/login", (req, res) => {
  const username = req.body.username || "";
  const password = req.body.password || "";
  if (username === "admin" && password === "admin") {
    const data = {
      userId: String(new Date().getTime()),
      token: String(new Date().getTime()),
    };
    res.send({ code: 200, data: data, message: "登陆成功" });
    return;
  }
  res.send({ code: 0, data: null, message: "登陆失败" });
});
//用户信息接口
app.post("/user/userInfo", (req, res) => {
  const userId = req.body.userId || "";
  if (userId !== "") {
    const data = {
      userId: new Date().getTime(),
      userName: "超级管理员",
      token: new Date().getTime(),
    };
    res.send({ code: 200, data: data, message: "获取用户信息成功" });
    return;
  }
  res.send({ code: 0, data: {}, message: "获取用户信息失败" });
});
//用户菜单接口
app.post("/user/setting", (req, res) => {
  const userId = req.body.userId || "";
  if (userId !== "") {
    const data = [
      { code: "data_1", name: "前断性能优化" },
      { code: "data_2", name: "数据展示2" },
      { code: "data_3", name: "数据展示3" },
      { code: "data_4", name: "数据展示4" },
      { code: "data_5", name: "数据展示5" },
    ];
    res.send({ code: 200, data: data, message: "获取菜单列表成功" });
    return;
  }
  res.send({ code: 0, data: [], message: "获取菜单列表失败" });
});
//用户退出接口
app.post("/user/LoginOut", (req, res) => {
  const userId = req.body.userId || "";
  if (userId !== "") {
    res.send({ code: 200, data: true, message: "退出登录成功" });
    return;
  }
  res.send({ code: 0, data: false, message: "退出登录失败" });
});
app.listen(9000);
