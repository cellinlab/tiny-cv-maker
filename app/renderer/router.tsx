import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '@src/container/home';
import Resume from '@src/container/resume';

import ROUTER from '@common/contants/router';

function Router () {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.home} exact>
          <Home />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      <Redirect to={ROUTER.home} />
    </HashRouter>
  );
}

export default Router;
