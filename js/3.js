console.log("====== 3. 删除链表的倒数第N个节点 ======");
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
const head = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: null,
		},
	},
};

// function deleteNode(head,delIndex){
// 	if(!delIndex){
// 		return head.next;
// 	}
// 	head.next = deleteNode(head.next,--delIndex)
// 	return head
// }

const removeNthFromEnd = function (head, n) {
	let tmp = head;
	const stack = [];
	while (tmp) {
		stack.push(tmp);
		tmp = tmp.next;
	}
	const result = stack[stack.length - n - 1];
	result.next = result.next.next;
	return head;
};

console.log(removeNthFromEnd(head, 2));
