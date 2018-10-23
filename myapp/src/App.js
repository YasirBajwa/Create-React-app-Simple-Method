import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {  
  render() {
    const list={
    name: 'Yasir Bajwa'
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{list.name='Hello world'}</p>
        </header>
      </div>
    );
  }
}

export default App;
