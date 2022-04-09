class EventBus {
  constructor() {
    this.cache = {};
  }

  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name,fn){
      if(this.cache[name]){
          const index = this.cache[name].findIndex(itm=>itm===fn)
          if(index!==-1){
              this.cache[name].splice(index,1)
          }
      }
  }

  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      const cache = [...this.cache[name]]; //防止循环调用造成死循环
      for (let fn of cache) {
        fn(...args);
      }
      if (once) {
        Reflect.deleteProperty(this.cache, name);
      }
    }
  }
}

let bus = new EventBus();

let fn1 = function (name) {
  console.log("fn1", name);
};

let fn2 = function (name, age) {
  console.log("fn2", name, age);
};

bus.on("bus", fn1);
bus.on("bus", fn1);
bus.on("bus", fn1);
bus.on("bus", fn1);
bus.on("bus", fn2);
bus.off("bus", fn1);

bus.emit("bus", false, "a", "b");
