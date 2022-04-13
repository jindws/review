function EventEmitter(delay) {
  const catchList = {};

  this.on = function (name, fn) {
    if (name in catchList) {
      catchList[name][this.pre?'unshift':'push']({
        fn,
        once: this.once,
      });
    } else {
      catchList[name] = [
        {
          fn,
          once: false,
        },
      ];
    }
  };

  this.off = function (name, fn) {
    if (name in catchList) {
      const index = catchList[name].findIndex((itm) => itm.fn === fn);
      if (index !== -1) {
        catchList[name].splice(index, 1);
      }
    }
  };

  this.emit = function (name, once = false, ...args) {
    const list = catchList[name] || [];
    for (let i = 0; i < list.length; i++) {
      const itm = list[i];
      itm.fn.apply(this, args);
      if (itm.once) {
          list.splice(i--,1)
      }
    }
  };

  this.prependListener = function (name, fn) {
      this.on.call({pre:true},name,fn)
  };

  this.once = function (...args) {
      this.on.apply({once:true},args)
  };
}
const e = new EventEmitter(100);
e.on("console", () => {
  console.log(1);
});

e.once("console", (a) => {
  console.log('once',a);
});

// function fn() {
//   console.log(123);
// }
//
// e.on("console", fn);
// e.off("console", fn);

e.emit("a");
e.emit("console", false, 1, 2);
e.emit("console", false, 1, 2);
