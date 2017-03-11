import React, { Component } from 'react';
import logo from '../ez_logo.png';
import ItemList from './ItemList';
import CategoryList from './CategoryList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo}  alt="logo" height="50" />
        </div>
        <p className="App-intro">
        </p>
        <ItemList />
        <CategoryList />
      </div>
    );
  }
}

export default App;
