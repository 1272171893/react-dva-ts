import React, { FC } from "react";
import { connect } from "dva";
const SliderLayout: FC = (props) => {
  console.log(props);
  return <div>侧边部分</div>;
};
export default connect(({ global }: any) => ({ global }))(SliderLayout);
