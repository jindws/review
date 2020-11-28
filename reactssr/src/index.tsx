import * as React from 'react'
import {Route} from 'react-router-dom'
import Index from "./pages";
import About from "./pages/about";
import { Provider } from 'mobx-react';
import store from './store'

export default (
	<Provider {...store}>
		<Route path='/' exact component={Index}/>
		<Route path='/about' exact component={About}/>
	</Provider>
)
