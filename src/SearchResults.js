import React, { Component } from 'react';
import logo from './logo.svg';
import ItemList from './ItemList';
import {Link, withRouter} from 'react-router';
import './App.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to eZ Shop</h2>
        </div>
        <p className="App-intro">
          asddasadsadsads
        </p>
        <ItemList />
      </div>
    );
  }
}

export default withRouter(SearchResults);
