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
  // const username = req.body.username || ""
  // const password = req.body.password || ""
  res.send({ data: "hello world" });
});
console.log(1111);
app.listen(9000);
