import React, { Component } from 'react';

import logo from '../ez_logo.png';
import {Link, withRouter} from 'react-router';
import ItemList from './ItemList';
import CategoryList from './CategoryList';
import './App.css';

class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.handleChangeText = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({search: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.context.router.history.push('/search/' + this.state.search);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo}  alt="logo" height="50" />
        </div>
        <p className="App-intro">
        <div className="Search">
          <form className="search" action='/search' onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.search} placeholder="Milk.." onChange={this.handleChangeText} />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <ItemList />
        <CategoryList />
        </p>
      </div>
    );
  }
}

export default withRouter(App);
