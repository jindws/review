import assert = require("assert");

const immutable = require('immutable');
const {Map:MAP,Seq,List,fromJS} = immutable
/**
 * Map
 */
console.log('========>Map')
let map = MAP({a:1})
//set
map.set('a',2)//不改变原先的值
console.log(map.get('a'))//1
map = map.set('a',3)//返回的是新值
console.log(map.get('a'))//3
const map2 = map.set('a',4)
//get
console.log(map.get('a'),map2.get('a'))//3,4
const map3 = map.set('b',1)
console.log(map.get('b'),map3.get('b'))//undefined,1
const map4 = MAP({
	b:1,
	a:3
})
//equals
console.log(map4.equals(map3))//true
map4.map((v,k)=>{
	console.log(k,v)
})
console.log(map4.map((v, k) => k.toUpperCase()).join())
/**
 * List
 */
console.log('========>List')
const list1 = List([ 1, 2 ]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
const list5 = list4.pop()
console.log(list1.size)//1 2
console.log(list2.size)//1 2 3 4 5
console.log(list3.size)//0 1 2 3 4 5
console.log(list4.size)//1 2 1 2 3 4 5 0 1 2 3 4 5
console.log(list5.size)//1 2 1 2 3 4 5 0 1 2 3 4

console.log('========>Seq')
const myObject = { a: 1, b: 2, c: 3 };
console.log(Seq(myObject).map(x => x * x).toObject())//{ a: 1, b: 4, c: 9 }

console.log('========>fromJS')
const m = MAP({1:true})
const f = fromJS({
	1:true
});
console.log(m.get(1),m.get('1'))//undefined,true
console.log(f.get(1),f.get('1'))//undefined,true
console.log('========>from')
const deep = MAP({ a: 1, b: 2, c: List([ 3, 4, 5 ]) });
console.log(deep.toObject()); // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
console.log(deep.toArray()); // [ 1, 2, List [ 3, 4, 5 ] ]
console.log(deep.toJS()); // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep); // '{"a":1,"b":2,"c":[3,4,5]}
