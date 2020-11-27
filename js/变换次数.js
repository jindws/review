/**
 * 输入一个数组，然后不断加1或者减一，让数组中所有元素都相等，求最少变换次数
	如【1，2，4】，则1，2，4->2,2,4->2,2,3->2,2,2
 */

function fun(list){
	list = list.sort((a,b)=>a-b)
	let resultList = []
	for(let i=1;i<list.length-1;i++){
		let result=0;
		list.map(itm=>result +=Math.abs(itm-list[i]))
		resultList.push(result)
	}
	return resultList.sort((a,b)=>a-b)[0]
}

console.log(fun([1,1,2,3,4]))
