import logo from './logo.svg';
import './App.css';
import Messenger from './Components/Massenger/Messenger';
import AccountProvider from './Components/Context/AccountProvider';

function App() {
  return (
    <div className="App">
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </div>
  );
}

export default App;
