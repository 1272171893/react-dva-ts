// import Mock from "mockjs";
// export const login = Mock.mock(`user/login`, (data: any) => {
//   return true;
// });
const express = require("express");
const app = express();
app.get("/user/login", (req, res) => {
  res.send("hello world");
});
console.log(1111)
app.listen(9000);
