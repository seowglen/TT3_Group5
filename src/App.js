import React, { useState } from 'react';

import logo from './logo.svg';
import AccountBalance from "./AccountBalance"
import Transactions from "./Transactions"
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/login/login';



function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <header className="App-header">
      <Switch>
          <Route path="/balance" component={AccountBalance} exact/>
          <Route path="/transaction" component={Transactions} exact/>
      </Switch>
      </header>
    </div>
  );
}

export default App;
