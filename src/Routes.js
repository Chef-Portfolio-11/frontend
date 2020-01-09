import Login from "./components/Login";
import React from "react";
import { Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
    </Switch>
  );
}

