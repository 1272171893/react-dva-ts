// import Mock from "mockjs";
// export const login = Mock.mock(`user/login`, (data: any) => {
//   return true;
// });
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/user/login", (req, res) => {
  console.log("req", req.body);
  const username = req.body.username || "";
  const password = req.body.password || "";
  if (username === "admin" && password === "admin") {
    const data = {
      userId: new Date().getTime(),
      userName: "超级管理员",
      token: new Date().getTime(),
    };
    res.send({ code: 200, data: data, meaasge: "登陆成功" });
    return;
  }
  res.send({ code: 0, data: null, meaasge: "登陆失败" });
});
console.log(1111);
app.listen(9000);
