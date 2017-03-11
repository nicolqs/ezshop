import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './App';
import Categories from './Categories';
import SearchResults from './SearchResults';
import './index.css';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
	<Route path="/" component={App}>
		<Route path="/search" component={SearchResults} />	
		<Route path="/categories" component={Categories} />	
	</Route>
  </Router>,
  document.getElementById('root')
);
