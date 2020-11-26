import React, { FC } from "react";
import { connect } from "dva";
const HeaderLayout: FC = (props) => {
  console.log(props);
  return <div>我是头部</div>;
};
export default connect(({ global }: any) => ({ global }))(HeaderLayout);
