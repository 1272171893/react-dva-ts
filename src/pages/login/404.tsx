import React, { FC } from "react";
import { connect } from "dva";
const Login: FC<any> = (props) => {
  return <div className="wh100  relative background_contain">你好啊</div>;
};
export default connect(({ login }: any) => ({ login }))(Login);
