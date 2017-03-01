import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';


import Layout from './pages/Layout'
//routing video
// https://www.youtube.com/watch?v=1iAG6h9ff5s&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=6

const app = document.getElementById('app')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}
		</Route>
	</Router>
);


/*********** 

Figure out structure. Currently pulling in `~.react.jsx` files and 
normal js files. Determine which to use and keep it consistant

*************/