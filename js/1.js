console.log('点击上方绿色运行按钮, 右侧输出 console 信息.');
console.log('不需要额外 IDE, 也不需要使用浏览器调试器');

console.log('====== 1.数组扁平化======');
var arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10 , [11, 12, 13], 14]], 15];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('current -> ' + JSON.stringify(arr1));


// var result = []
function method(arr) {
	// if(Array.isArray(arr)){
	// 	return arr.reduce((result,next)=>{
	// 		return result.concat(Array.isArray(next) ? method(next) : next)
	// 	},[])
	// }
	// return []
	
	// return arr.toString().split(',').map(itm=>+itm)
	
	if(Array.isArray(arr)){
		return arr.reduce((a,b)=>{
			return a.concat(Array.isArray(b)?method(b):b)
		},[])
	}
}

console.log(111, method(arr1))
console.log('result --> ' + JSON.stringify(method(arr1)));
console.log('should --> ' + true);
console.log('[equal] -> ' + (JSON.stringify(arr2) === JSON.stringify(method(arr1))));
