import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createRouterDecorator } from 'ui/story-utils';
import { PageNotFound } from 'ui/orgs/PageNotFound';

export default {
  title: 'orgs/PageNotFound',
  decorators: [createRouterDecorator({ initialEntries: ['/foo'] })],
};

export const Usage = () => (
  <Switch>
    <Route path="/" exact>
      Redirect complete :)
    </Route>
    <Route>
      <PageNotFound />
    </Route>
  </Switch>
);
