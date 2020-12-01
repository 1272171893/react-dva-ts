import React, { FC, useState, useEffect } from "react";
import { connect } from "dva";
import "components/layouts/less/SliderLayout.less";
import routesList from "routes/models/index";
interface Iprops {
  [key: string]: any;
}
const SliderLayout: FC<Iprops> = (props) => {
  const { global: state } = props;
  const [subList, setSubList] = useState<any[]>([]);
  useEffect(() => {
    const data = routesList[state.activeMainMenue] || [];
    setSubList(data);
  }, [state.activeMainMenue]);

  console.log(111, props, routesList, subList);
  return (
    <div className="slider_box absolute">
      <div className="wh100 overflow-y">
        {new Array(100).fill(1).map((item: number, index: number) => (
          <p key={index}>{index}</p>
        ))}
      </div>
    </div>
  );
};
export default connect(({ global }: any) => ({ global }))(SliderLayout);
