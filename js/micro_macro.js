setTimeout(function(){console.log(1)},0);
new Promise(function(resolve){
    console.log(2)
    for(let i=0 ; i<10000 ; i++ ){
        i===9999 && resolve()
    }
    console.log(3)
}).then(function(){
    console.log(4)
});
console.log(5);



//macro-task(宏任务)包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。
//micro-task(微任务)包括：process.nextTick, Promises, Object.observe, MutationObserver,MessageChannel

//宏任务(macro-task) 每次遇到会塞入队列,等micro-task执行完再执行1个,再循环

//setTimeout 是macro,塞入macro队列
//Promise 执行打印2,3
//Promise.then是micro,塞入micro队列

//console.log(5)执行
//执行micro队列|console.log(4)
//执行macro队列|console.log(1)

// 结果:23451