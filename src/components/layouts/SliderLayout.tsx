import React, { FC } from "react";
import { connect } from "dva";
import "components/layouts/less/SliderLayout.less";
const SliderLayout: FC = (props) => {
  console.log(props);
  return <div className='slider_box absolute'>侧边部分</div>;
};
export default connect(({ global }: any) => ({ global }))(SliderLayout);
