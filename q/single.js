const single = (function () {
  let data = false;
  return function (name) {
    if (data) return data;
    this.name = name;
    return (data = this);
  };
})();
const a = new single(1);
const b = new single(2);
const c = new single(3);
console.log(a===b)
