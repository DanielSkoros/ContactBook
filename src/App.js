import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./containers/Home";
import Page404 from "./containers/404";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Header from "./components/Header";

const Routes = () => {
  return (
      <>
          <Header data-testid="header"/>
          <BrowserRouter>
              <Switch>
                  <Route exact path={'/'} component={Home} />
                  <Route component={Page404}/>
              </Switch>
          </BrowserRouter>
      </>
)

};
export default Routes;
