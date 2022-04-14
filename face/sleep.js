//完成 sleep 函数，可以达到下面的效果：

const sleep = (duration) => {
  // TODO
    return new Promise(resolve=>{
        setTimeout(resolve,duration)
    })
};

const anyFunc = async () => {
  console.log("123"); // 输出 123
  await sleep(3000); // 暂停 3000 毫秒
  console.log("456"); // 输出 456，但是距离上面输出的 123 时间上相隔了 3000 毫秒
};

anyFunc().finally()