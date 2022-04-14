//编写一个 People 类，使其的实例具有监听事件、触发事件、解除绑定功能。（实例可能监听多个不同的事件，也可以去除监听事件）

class People {
  constructor(name) {
    this.name = name;
    this.catch = {};
  }

  // TODO: 请在此处完善代码

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  on(name, fn) {
    if (name in this.catch) {
      this.catch[name].push({fn});
    } else {
      this.catch[name] =[ { fn }];
    }
  }

  off(name,fn){
      if (name in this.catch) {
          this.catch[name] = this.catch[name].filter(itm=>itm.fn !== fn)
      }
  }

  emit(name,...args){
      if (name in this.catch) {
          for(let itm of this.catch[name]){
              itm.fn.apply(null,args)
          }
      }
  }
}

/* 以下为测试代码 */
const say1 = (greeting) => {
  console.log(`${greeting}, nice meeting you.`);
};

const say2 = (greeting) => {
  console.log(`${greeting}, nice meeting you, too.`);
};

const jerry = new People("Jerry");
jerry.sayHi();
// => 输出：'Hi, I am Jerry'

jerry.on("greeting", say1);
jerry.on("greeting", say2);

jerry.emit("greeting", "Hi");
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off("greeting", say1);
jerry.emit("greeting", "Hi");
// => 只输出：'Hi, nice meeting you, too'
