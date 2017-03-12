import React, { Component } from 'react';
import {Link, withRouter} from 'react-router';

import ItemList from './ItemList';
import CategoryList from './CategoryList';

import logo from './logo.svg';
import './App.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
          <ItemList search={this.props.params.name} />
          <CategoryList />
      </div>
    );
  }
}

export default withRouter(SearchResults);
