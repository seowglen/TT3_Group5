import logo from './logo.svg';
import './App.css';
import CurrentAssetPrice from './CurrentAssetPrice';
import ViewTransactions from './ViewTransactions';

function App() {
  return (
    <div className="App">
      <CurrentAssetPrice />
      <ViewTransactions />
    </div>
  );
}

export default App;
