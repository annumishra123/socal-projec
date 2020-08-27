import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Developers from "../components/layout/Developers";
import Result from "../components/layout/Result";
import UserEdit from "../components/layout/UserEdit";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/developers" component={Developers} />
      <PrivateRoute exact path="/result" component={Result} />
      <PrivateRoute exact path="/userupdate" component={UserEdit} />
    </Switch>
  );
};

export default MainRoute;
