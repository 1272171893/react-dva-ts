import React, { FC } from "react";
import "components/layouts/less/HeaderLayout.less";
import { connect } from "dva";
const HeaderLayout: FC<any> = (props) => {
  const { global: state } = props;
  console.log(props, state);
  return (
    <div className="header_box w100 absolute t_l_0 flex_nowrap j_b">
      <div className="header_left h100 flex_nowrap a_c">
        <img src={state.logo} alt="登录logo" />
        <h1>{state.title}</h1>
      </div>
      <div className="header_main h100 flex_nowrap a_c flex1">2</div>
      <div className="header_right h100 flex_nowrap a_c">3</div>
    </div>
  );
};
export default connect(({ global }: any) => ({ global }))(HeaderLayout);
