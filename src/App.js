import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Dashboard from './Components/Dashboard';
import CustomerDash from './Container/CustomerDash'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Customer" component={CustomerDash} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
