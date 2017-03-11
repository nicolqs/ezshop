import React, { Component } from 'react';
import logo from './logo.svg';
import ItemList from './ItemList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to eZ Shop</h2>
        </div>
        <p className="App-intro">
          Hello World
        </p>
        <ItemList />
      </div>
    );
  }
}

export default App;
