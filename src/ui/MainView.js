import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "ui/Home";
import { Todos } from "ui/Todos";
import { PageNotFound } from "ui/PageNotFound";

export function MainView() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/todos">
        <Todos />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}
