import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';

import ItemList from './ItemList';
import CategoryList from './CategoryList';

import logo from './logo.svg';
import './App.css';

class SearchResults extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
          <ItemList />
          <CategoryList />
      </div>
    );
  }
}

export default withRouter(SearchResults);
