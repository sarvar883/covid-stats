import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import NotFound from './components/help/NotFound';

import History from './components/info/History';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={History} />
        <Route exact path="*" component={NotFound} />
      </Switch>

    </Router>
  );
}

export default App;