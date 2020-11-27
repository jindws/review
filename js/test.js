console.log('点击上方绿色运行按钮, 右侧输出 console 信息.');
console.log('不需要额外 IDE, 也不需要使用浏览器调试器');

console.log('====== 1.数组扁平化======');
const arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10 , [11, 12, 13], 14]], 15];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('current -> ' + JSON.stringify(arr1));


var result = []
function method(arr) {
	for(var i=0;i<arr.length;i++){
		if(arr[i] instanceof Array) {
			method(arr[i])
		} else{
			result = result.concat(arr[i])
		}
	}
	// your code
	// 可以返回其他数组
	return result;
}

console.log(111, method(arr1))
console.log('result --> ' + JSON.stringify(method(arr1)));
console.log('should --> ' + true);
console.log('[equal] -> ' + (JSON.stringify(arr2) === JSON.stringify(method(arr1))));



console.log('====== 2. 一个请求控制函数 ======');
// 2. 实现一个请求控制函数

// 一次性输入多个 url 要求实现按照给定的最大的值并发请求，完成一个请求后自动发送下一个，请求全部结束后调用回调函数

var urls = ['http://1', 'http://2', 'http://3', 'http://4', 'http://5'];

function _fetch(url) {

}

function fetch(url){
	console.log(url)
	return
}

console.log(22, _fetch(urls))

console.log('====== 3. 删除链表的倒数第N个节点 ======');
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
// 给定的 n 保证是有效的。
// 进阶：
// 你能尝试使用一趟扫描实现吗？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var head = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: null
		}
	}
}

var removeNthFromEnd = function(head, n) {

};
