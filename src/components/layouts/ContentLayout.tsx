import React, { FC } from "react";
import { connect } from "dva";
const ContentLayout: FC = (props) => {
  console.log(props);
  return <div>主体部分</div>;
};
export default connect(({ global }: any) => ({ global }))(ContentLayout);
