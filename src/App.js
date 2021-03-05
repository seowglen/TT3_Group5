import logo from './logo.svg';
import AccountBalance from "./AccountBalance"
import Transactions from "./Transactions"
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
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
