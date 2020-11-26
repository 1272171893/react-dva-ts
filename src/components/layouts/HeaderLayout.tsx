import React, { FC } from "react";
import "components/layouts/less/HeaderLayout.less";
import { connect } from "dva";
const HeaderLayout: FC = (props) => {
  console.log(props);
  return <div className="header_box w100 absolute t-l-0">我是头部</div>;
};
export default connect(({ global }: any) => ({ global }))(HeaderLayout);
