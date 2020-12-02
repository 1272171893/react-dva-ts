import React, { FC } from "react";
import "pages/login/index.less";
import { Layout, Form, Input, Button } from "antd";
import { connect } from "dva";
const { Header, Content, Footer } = Layout;
const { Item } = Form;
const Login: FC<any> = (props) => {
  const { login: state } = props;
  console.log("props", props);
  return (
    <div className="wh100 login_box relative background_contain">
      <div className="top_center login_from inline_block">
        <Layout className="login_from_box">
          <Header className="login_title t_c">{state.loginTitle}</Header>
          <Content className="login_content">
            <Form name="basic" size="large">
              <Item
                name="username"
                rules={[{ required: true, message: "请输入用户名!" }]}
              >
                <Input />
              </Item>

              <Item
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input.Password />
              </Item>
              <Item>
                <Button type="primary" block htmlType="submit">
                  登录
                </Button>
              </Item>
              <Item>
                <Button type="primary" block htmlType="submit">
                  登录
                </Button>
              </Item>
            </Form>
          </Content>
          <Footer className="login_footer t_c">{state.loginFooter}</Footer>
        </Layout>
      </div>
    </div>
  );
};
export default connect(({ login }: any) => ({ login }))(Login);
