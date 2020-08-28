import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "../components/auth/Login";
import Developers from "../components/layout/Developers";
import Result from "../components/layout/Result";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/developers" component={Developers} />
      <PrivateRoute exact path="/result" component={Result} />
    </Switch>
  );
};

export default MainRoute;
