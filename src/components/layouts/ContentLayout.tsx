import React, { FC } from "react";
import { connect } from "dva";
import "components/layouts/less/ContentLayout.less";
const ContentLayout: FC = (props) => {
  console.log(props);
  return <div className='content_box absolute'>主体部分</div>;
};
export default connect(({ global }: any) => ({ global }))(ContentLayout);
