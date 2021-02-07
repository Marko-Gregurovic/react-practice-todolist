import logo from './logo.svg';
import './App.css';

import CheckList from './components/CheckList';

import MyHeader from './components/MyHeader';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <CheckList />
    </div>
  );
}

export default App;
