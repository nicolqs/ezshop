import React, { Component } from 'react';
import {Link, withRouter, browserHistory } from 'react-router';
import './App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.handleChangeText = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({search: event.target.search});
  }
  handleSubmit(event) {
    event.preventDefault();
    browserHistory.push('/search/' + this.state.search);
  }
  render() {
    return (
      <div>search</div>
    );
  }
}

export default withRouter(Search);
