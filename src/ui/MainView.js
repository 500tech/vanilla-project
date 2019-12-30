import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("ui/Home"));
const Todos = lazy(() => import("ui/Todos"));
const PageNotFound = lazy(() => import("ui/PageNotFound"));

function Spinner() {
  return <div>Loading...</div>;
}

export function MainView() {
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
}
