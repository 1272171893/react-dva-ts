import React, { FC } from "react";
import { connect } from "dva";
import { Switch, Route, routerRedux } from "dva/router";
import routesList from "routes/models/index";
import dynamic from "dva/dynamic";
import "components/layouts/less/ContentLayout.less";
interface Iprops {
  [key: string]: any;
}
const ContentLayout: FC<Iprops> = (props) => {
  const { global: state, app } = props;
  const data: any[] = routesList[state.activeMainMenue] || [];
  console.log(111, data);
  return (
    <div className="content_box absolute">
      {data.map(({ path, ...dynamics }, key) => (
        <Route
          exact={true}
          path={path}
          key={key}
          component={(dynamic as any)({ app, ...dynamics })}
        ></Route>
      ))}
    </div>
  );
};
export default connect(({ global }: any) => ({ global }))(ContentLayout);
