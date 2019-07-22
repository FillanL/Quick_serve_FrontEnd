import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
