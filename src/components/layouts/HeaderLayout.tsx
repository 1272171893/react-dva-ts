import React, { FC } from "react";
import "components/layouts/less/HeaderLayout.less";
import { connect } from "dva";
const HeaderLayout: FC = (props) => {
  console.log(props);
  return <div className="w100 relative">我是头部</div>;
};
export default connect(({ global }: any) => ({ global }))(HeaderLayout);
