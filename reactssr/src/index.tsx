import * as React from 'react'
import {Route} from 'react-router-dom'
import Index from "./pages";
import About from "./pages/about";

export default (
	<>
		<Route path='/' exact component={Index}/>
		<Route path='/about' exact component={About}/>
	</>
)
