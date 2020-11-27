import * as React from 'react'


function App({title}){
	return <div>
		hello {title}
		<br/>
		<a onClick={()=>console.log(33)}>button</a>
	</div>
}

export default <App title='ssr'/>
