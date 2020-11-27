console.log('====== 2. 一个请求控制函数 ======');
// 2. 实现一个请求控制函数

// 一次性输入多个 url 要求实现按照给定的最大的值并发请求，完成一个请求后自动发送下一个，请求全部结束后调用回调函数

var urls = ['http://1', 'http://2', 'http://3', 'http://4', 'http://5'];

function _fetch(url,max) {
	let remain = url.length
	function use(_url=url.pop()){
		if(_url){
			console.log(_url,'start')
			fetch(_url).then(url=>{
				console.log(url,'success')
				remain--;
				use()
			}).catch((url)=>{
				console.log(url,'fail')
				use(url)
			})
		}else if(!remain){
			console.log('callback')
		}
	}
	
	while(max--){
		use()
	}
}

function fetch(url){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			Math.random()>0.5?resolve(url):reject(url)
		},5000*Math.random())
	})
}

console.log( _fetch(urls,2))
