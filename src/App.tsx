import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from 'components/Home';

const App: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default App;
