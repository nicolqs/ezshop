import React, { Component } from 'react';
import { browserHistory, Link, withRouter } from 'react-router';

import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
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
    browserHistory.push('/search/' + this.state.search);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to eZ Shop</h2>
        </div>
        <p className="App-intro">
          <div className="Search">
            <form className="search" action='/search' onSubmit={this.handleSubmit}>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text" value={this.state.search} placeholder="Milk.." onChange={this.handleChangeText} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Button type="submit" value="Submit">
                  Search
                </Button>
              </FormGroup>
            </form>
          </div>
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
