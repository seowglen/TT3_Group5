import React, { useState } from 'react';

import logo from './logo.svg';
import AccountBalance from "./AccountBalance"
import Transactions from "./Transactions"
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CurrentAssetPrice from './CurrentAssetPrice';
import ViewTransactions from './ViewTransactions';
import Historical from './Historical';

import useToken from './components/useToken/useToken';
import UserInfo from './components/userInfo/userInfo';
import Login from './components/login/login';



function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  
  return (
    <div className="App">
      <Historical />
      <UserInfo />
      <CurrentAssetPrice />
      <ViewTransactions />
      <AccountBalance />
      <Transactions />
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
