import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "ui/Home";
import { Todos } from "ui/Todos";
import { PageNotFound } from "ui/PageNotFound";

export function MainView() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/todos" component={Todos} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
