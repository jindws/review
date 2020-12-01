let s1 = Symbol()
console.log(typeof s1)//symbol
let s2 = Symbol('test')//添加description
console.log(s2 === Symbol('test'))//false 每个Symbol实例都是唯一的
console.log('====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ======')
const name = Symbol('name')
const sex = Symbol('sex')
let obj = {
    [name]:'Jim',
    age:18,
}
obj[sex] = 'man'
console.log(obj[name])//Jim
console.log(obj[sex] === 'man')//true

// 当使用了Symbol作为对象的属性key后不能使用枚举方法
console.log(Object.keys(obj))//['age']
console.log(Object.getOwnPropertyNames(obj))//['age']
for (const itm in obj) {
    console.log(itm)//age
}
console.log(obj)//{ age: 18, [Symbol(name)]: 'Jim', [Symbol(sex)]: 'man' }
console.log(Object.getOwnPropertySymbols(obj))//[ Symbol(name), Symbol(sex) ]
console.log(Object.getOwnPropertySymbols(obj)[0])//Symbol(name)
console.log(Object.getOwnPropertySymbols(obj)[0] === name)//true
console.log('====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ======')
console.log(Symbol(1) === Symbol(1))//false Symbol() 函数每次都会返回新的一个 symbol

//Symbol.for(key) key为string
console.log(Symbol.for('1') === Symbol.for(1))//true Symbol() 函数每次都会返回新的一个 symbol
console.log(Symbol.for({}) === Symbol.for({}))//true '{}' === '{}'
console.log(Symbol.for('1').toString())//Symbol(1) key同时也是description

console.log(Symbol.keyFor(Symbol.for('test')))//test
console.log(Symbol.keyFor(Symbol('test')))//undefined 只有description,没有key
console.log('====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ====== ======')
// Symbol('test') + 's'//error
// 's'+Symbol('test')//error
console.log(Symbol().toString())//Symbol()
console.log(Symbol('s').toString())//Symbol(s)
console.log(Symbol.for('s').toString())//Symbol(s)
console.log(Symbol().toString()+'s')//Symbol()s
// console.log(Object(Symbol())+'s')//error
console.log(Object(Symbol()).toString()+'s')//Symbol()s
console.log(Object(Symbol.for('s')).valueOf() === Symbol.for('s'))//true