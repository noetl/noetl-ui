import React from "react";
import {Redirect, Route} from "react-router-dom";
import authorization from "./authorization";

export default ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authorization.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)
