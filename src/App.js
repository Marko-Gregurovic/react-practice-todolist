import logo from './logo.svg';
import './App.css';
import React from 'react';

import CheckList from './components/CheckList';

import MyHeader from './components/MyHeader';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <MyHeader />
        <CheckList />
      </div>
    );
  }
}

export default App;
