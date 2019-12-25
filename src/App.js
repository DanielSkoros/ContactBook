import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Page404 from "./containers/404";

const Routes = () => {
  return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route component={Page404}/>
      </Switch>
  )
};
export default Routes;
