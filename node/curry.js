// function curry(fn) {
//   const cur = function (...arr) {
//     if (arr.length === fn.length) return fn(...arr);
//     return (..._arr) => cur(..._arr, ...arr);
//   };
//   return cur;
// }
//
// function add(a, b, c) {
//   return a + b + c;
// }
//
// let addCurry = curry(add);
// console.log(addCurry(1)(2)(3));//6


// function curry2(fn){
//   const len = fn.length;
//   const cur = function (...args){
//       if(args.length === len)return fn(...args)
//       return (..._args)=>cur(...args,_args)
//   }
//   return cur
// }
//
//
// function fn(a,b){
//   return +a+ +b
// }
//
//
// const sum = curry2(fn)
//
// console.log(sum(2)(3))
// console.log(sum(2,3))