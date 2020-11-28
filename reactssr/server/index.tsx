/**
 * ssr
 */
import * as React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/index'
import {StaticRouter} from 'react-router-dom'

const app = express()
app.use(express.static('public'))

app.get('*',(req,res)=>{
	const content = renderToString(<StaticRouter location={req.url}>
		{App}
	</StaticRouter>);
	res.send(`
		<html lang>
			<head>
				<meta charset="utf-8">
				<title>ssr</title>
			</head>
			<body>
				<section id="app">
					${content}
				</section>
			</body>
			<script src="/bundle.js"></script>
		</html>
	`)
})

app.listen(3001,()=>{
	console.log('listen 3001')
})
