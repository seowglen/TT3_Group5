import logo from './logo.svg';
import AccountBalance from "./AccountBalance"
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
          <Route path="/" component={AccountBalance} exact/>
      </Switch>
      </header>
    </div>
  );
}

export default App;
