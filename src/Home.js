import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { render } from 'react-dom';

class Home extends Component {
    render(){
        return (<h1>Home</h1>);
    }
}

export default withRouter(Home);