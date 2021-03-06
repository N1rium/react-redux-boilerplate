import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomeContainer from 'Containers/home';

// const getUser = () => store.getState().auth.user;

const PrivateRoute = (props) => {
  // if (!getUser()) {
  //   return <Redirect to={`/authlanding?path=${window.location.pathname}`} />;
  // }
  return <Route {...props} />;
};

const Router = () => (
  <Switch>
    <PrivateRoute exact path="/" component={HomeContainer} />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Router;
