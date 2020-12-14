import React, { FC } from "react";
import nodemailer from "nodemailer";
import { Button } from "antd";
const App: FC = () => {
  const sendMail = async () => {
    debugger;
    console.log(nodemailer);
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 587,
      pool: true,
      secure: false, // true for 465, false for other ports
      auth: {
        type: "custom",
        method: "MY-CUSTOM-METHOD", // forces Nodemailer to use your custom handler
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
      customAuth: {
        "MY-CUSTOM-METHOD": (ctx) => {
          console.log("ctx", ctx);
          return ctx;
        },
      },
    });
    let info = await transporter.sendMail({
      from: '"1272171893@qq.com>', // sender address
      to: "1828627792@qq.com", // list of receivers
      subject: "Hello", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };
  return (
    <div>
      <h1>你好</h1>
      <h1> data_1</h1>
      <h1>view_1</h1>
      <Button onClick={sendMail}>发送</Button>
    </div>
  );
};
export default App;
