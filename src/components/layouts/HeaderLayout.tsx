import React, { FC, ReactElement, Fragment } from "react";
import "components/layouts/less/HeaderLayout.less";
import { connect } from "dva";
import { Avatar, Dropdown, Menu, Modal } from "antd";
import { getLoginOut } from "server/models/login";
const { Item } = Menu;
interface IMenuItem {
  code: string;
  name: string;
}
const HeaderLayout: FC<any> = (props) => {
  const { global: state, dispatch, history } = props;
  const options: ReactElement = (
    <Menu>
      <Item key="1">个人中心</Item>
      <Item key="2">系统设置</Item>
    </Menu>
  );
  const routerToPoint = (value: any) => {
    const type: string = "global/SETACTIVEMAINMENUE";
    const payload: string = value.key;
    dispatch({ type, payload });
  };
  const loginOut = async () => {
    const userId = sessionStorage.getItem("userId") || "";
    const result: any = await getLoginOut({ userId });
    if (result.code === 200) {
      sessionStorage.clear();
      history.push("/login");
    }
  };
  const confirm = () => {
    Modal.confirm({
      title: "温馨提示",
      content: "是否确定要退出该系统!",
      okText: "确认",
      cancelText: "取消",
      onOk: loginOut,
    });
  };
  return (
    <div className="header_box w100 absolute t_l_0 flex_nowrap j_b">
      <div className="header_left h100 flex_nowrap a_c">
        <img src={state.logo} alt="登录logo" />
        <h1>{state.title}</h1>
      </div>
      <div className="header_main h100 flex_nowrap a_c flex1">
        <Menu
          onClick={routerToPoint}
          selectedKeys={[state.activeMainMenue]}
          mode="horizontal"
          className="menu_box"
        >
          {state.mainMenu.map((item: IMenuItem, index: number) => (
            <Fragment key={index}>
              <Item key={item.code}>{item.name}</Item>
            </Fragment>
          ))}
        </Menu>
      </div>
      <div className="header_right h100 flex_nowrap a_c">
        <div className="user_info flex1 pointer">
          <Dropdown overlay={options} placement="bottomCenter" arrow>
            <div>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user_name">超级管理员</span>
            </div>
          </Dropdown>
        </div>
        <div className="login_out pointer" onClick={confirm}>
          <span className="login_title">注销</span>
          <span className="iconxiajiantou" />
        </div>
      </div>
    </div>
  );
};
export default connect((global: any) => global)(HeaderLayout);
