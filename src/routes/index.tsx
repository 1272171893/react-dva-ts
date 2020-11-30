import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route, routerRedux } from "dva/router";
import dynamic from "dva/dynamic";
import models from "routes/models/exclude";
import { IProps } from "types/routers";
import HeaderLayout from "components/layouts/HeaderLayout";
import SliderLayout from "components/layouts/SliderLayout";
import ContentLayout from "components/layouts/ContentLayout";
const { ConnectedRouter } = routerRedux;
const Routers = ({ history, app }: IProps) => {
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
        <Fragment>
          <div className='relative wh100 contain_bg'>
            <HeaderLayout history={history} app={app} />
            <SliderLayout history={history} app={app} />
            <ContentLayout history={history} app={app} />
          </div>
        </Fragment>
      </Switch>
    </ConnectedRouter>
  );
};
Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;
