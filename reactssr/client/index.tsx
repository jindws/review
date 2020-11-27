/**
 * csr
 */
import * as React from 'react'
import * as ReactDom from 'react-dom'

import App from '../src'

//注水
ReactDom.hydrate(App,document.getElementById('app'))
