import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Categories from './Categories';
import SearchResults from './SearchResults';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/search/:name" component={SearchResults} />
	</Route>
  </Router>,
  document.getElementById('root')
);
