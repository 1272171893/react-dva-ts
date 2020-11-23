import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, routerRedux } from "dva/router";
import dynamic from "dva/dynamic";
import models from "routes/models";
import { IProps } from "types/routers";
const { ConnectedRouter } = routerRedux;
const Routers = ({ history, app }: IProps) => {
  console.log("history", history, models);
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {models.map(({ path, ...dynamics }, key) => (
          <Route
            exact={true}
            path="/"
            key={key}
            component={(dynamic as any)({ app, ...dynamics })}
          ></Route>
        ))}
      </Switch>
    </ConnectedRouter>
  );
};
Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;
