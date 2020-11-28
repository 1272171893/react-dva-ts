import React, { FC, ReactElement, Fragment } from "react";
import "components/layouts/less/HeaderLayout.less";
import { connect } from "dva";
import { Avatar, Dropdown, Menu } from "antd";
const { Item } = Menu;
const HeaderLayout: FC<any> = (props) => {
  const { global: state } = props;
  console.log(props, state);
  const menu: ReactElement = (
    <Menu>
      <Item key="1">1st menu item</Item>
      <Item key="2">2nd memu item</Item>
      <Item key="3">3rd menu item</Item>
    </Menu>
  );
  return (
    <div className="header_box w100 absolute t_l_0 flex_nowrap j_b">
      <div className="header_left h100 flex_nowrap a_c">
        <img src={state.logo} alt="登录logo" />
        <h1>{state.title}</h1>
      </div>
      <div className="header_main h100 flex_nowrap a_c flex1">2</div>
      <div className="header_right h100 flex_nowrap a_c">
        <div className="user_info flex1 pointer">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Fragment>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user_name">超级管理员</span>
            </Fragment>
          </Dropdown>
        </div>
        <div className="login_out pointer">
          <span className="login_title">注销</span>
          <span className="iconxiajiantou" />
        </div>
      </div>
    </div>
  );
};
export default connect(({ global }: any) => ({ global }))(HeaderLayout);
