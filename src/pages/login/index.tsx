import React, { FC } from "react";
import "pages/login/index.less";
import { Layout, Form, Input, Button, Row, Col } from "antd";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { getLgoin, getUserInfo, getSetting } from "server/models/login";
import routesList from "routes/models/index";
const { Header, Content, Footer } = Layout;
const { Item } = Form;
interface Idata {
  userId: string;
  token: string;
}
const Login: FC<any> = (props) => {
  const { login: state, dispatch } = props;
  const getCaptcha = () => {
    console.log("获取验证码");
  };
  const loginIng = async (values: any) => {
    const result: any = await getLgoin(values);
    if (result.code === 200) {
      const payload: Idata = result.data || {};
      const { token, userId } = payload;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", userId);
      const userInfo: any = await getUserInfo({ userId });
      if (userInfo.code === 200) {
        dispatch({ type: "global/SETUSEINFO", payload: userInfo.data });
      }

      const setting: any = await getSetting({ userId });
      if (setting.code === 200) {
        if (setting.data.length === 0) {
          dispatch(routerRedux.push({ pathname: "/404" }));
          return;
        }
        const activeMainMenue:string = setting.data[0].code||'';
        const data: any[] = routesList[activeMainMenue] || [];
        const subItemPath: string = data.length === 0 ? "/404" : data[0].path;
        dispatch({ type: "global/SETAMAINMENUE", payload: setting.data });
        dispatch({ type: "global/SETACTIVEMAINMENUE", payload: activeMainMenue });
        dispatch({ type: "global/SETSUBMENUE", payload: data });
        dispatch({ type: "global/SETACTIVESUBMENUE", payload: subItemPath });
        dispatch(routerRedux.push({ pathname: subItemPath }));
      }
    }
  };
  const loginFailed = ({ values, errorFields, outOfDate }: any) => {
    console.log("正在失败", values, errorFields, outOfDate);
  };
  return (
    <div className="wh100 login_box relative background_contain">
      <div className="top_center login_from inline_block">
        <Layout className="login_from_box">
          <Header className="login_title t_c">{state.loginTitle}</Header>
          <Content className="login_content">
            <Form
              name="basic"
              size="large"
              onFinish={loginIng}
              onFinishFailed={loginFailed}
            >
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
                <Row gutter={8}>
                  <Col span={14}>
                    <Item
                      name="captcha"
                      rules={[{ required: true, message: "请输入验证码!" }]}
                    >
                      <Input />
                    </Item>
                  </Col>
                  <Col span={10}>
                    <img
                      className="w100 pointer"
                      style={{ height: 40 }}
                      src={state.captcha}
                      alt="验证码"
                      onClick={getCaptcha}
                    />
                  </Col>
                </Row>
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
