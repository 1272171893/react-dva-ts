import React, { FC } from "react";
import "pages/login/index.less";
import { Layout } from "antd";
import { connect } from "dva";
const { Header, Footer, Sider, Content } = Layout;
const Login: FC<any> = (props) => {
  const { login: state } = props;
  console.log("props", props);
  return (
    <div className="wh100 login_box relative background_contain">
      <div className="top_center login_from inline_block">
        <Layout className='login_from_box'>
          <Header className='login_title t_c'>{state.loginTitle}</Header>
          <Content>Content</Content>
        </Layout>
      </div>
    </div>
  );
};
export default connect(({ login }: any) => ({ login }))(Login);
