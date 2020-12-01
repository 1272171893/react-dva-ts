import React, { FC, useState, useEffect, HTMLAttributes } from "react";
import { connect } from "dva";
import "components/layouts/less/SliderLayout.less";
import routesList from "routes/models/index";
import classnames from "classnames";
interface Iprops {
  [key: string]: any;
}
const SliderLayout: FC<Iprops> = (props) => {
  const { global: state, dispatch, history } = props;
  useEffect(() => {
    const data: any[] = routesList[state.activeMainMenue] || [];
    const subItemPath: string = data.length === 0 ? "/404" : data[0].path;
    dispatch({ type: "global/SETSUBMENUE", payload: data });
    dispatch({ type: "global/SETACTIVESUBMENUE", payload: subItemPath });
    history.push(subItemPath);
  }, [state.activeMainMenue]);

  const goSubMenue = (item: any) => {
    const subItemPath: string = item.path;
    dispatch({ type: "global/SETACTIVESUBMENUE", payload: subItemPath });
    history.push(subItemPath);
  };

  return (
    <div className="slider_box absolute">
      <div className="wh100 overflow-y">
        {state.subMenue.map((item: any, index: number) => (
          <div
            key={index}
            className="w100 column_nowrap j_a_c sub_item pointer"
            onClick={() => goSubMenue(item)}
          >
            <span
              className={classnames(item.icon, {
                sub_icon: true,
                sub_active: state.activeSubMenue === item.path,
              })}
            ></span>
            <span
              className={classnames({
                sub_active_name: state.activeSubMenue === item.path,
              })}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default connect(({ global }: any) => ({ global }))(SliderLayout);
