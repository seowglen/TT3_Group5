import './App.css';
import React, { useState } from 'react';

import UserInfo from './components/userInfo/userInfo';
import Login from './components/login/login';



function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  
  return (
    <div className="App">
      <UserInfo />
    </div>
  );
}

export default App;
