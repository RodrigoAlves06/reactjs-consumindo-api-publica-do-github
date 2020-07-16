import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  // Switch serve para dar exclusividade para rota acessada.
  // exact serve para acessar a rota que contem exatamente no path.
  // + foi colocado para representar tudo que vem depois,
  // se tiver / ele considera.

  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
