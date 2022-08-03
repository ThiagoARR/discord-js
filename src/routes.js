import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeScreen from './components/layout/';
import { isAuthenticated } from "./services/auth";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <HomeScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;