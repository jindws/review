Array.prototype.reduce2 = function (fn, prev) {
  let sum = prev ? prev : 0;
  const fun = () => {
    for (let i = prev?1:0; i < this.length; i++) {
        sum = fn(sum, this[i], i, this);
    }
    return sum;
  };
  return fun();
};

console.log([1, 2, 3].reduce2((a,b,i)=>{
    // console.log(i)
    return a+b
},1))
// console.log(
//   [1, 2, 3].reduce2((a, b, i) => {
//     console.log(i);
//     return a + b;
//   })
// );
