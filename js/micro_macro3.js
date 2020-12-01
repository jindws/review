console.log('1');//0

setTimeout(() => {//宏任务1
    console.log('2');//第二轮开始执行 2-0
    Promise.resolve().then(() => {
        console.log('3');//微任务2-1
    })
    new Promise((resolve) => {
        console.log('4');//2-1
        resolve();
    }).then(() => {
        console.log('5')//微任务3-1
    })
})

Promise.reject().then(() => {
    console.log('13');
}, () => {
    console.log('12');//微任务1
})

new Promise((resolve) => {
    console.log('7');//1
    resolve();
}).then(() => {
    console.log('8')//微任务2
})

setTimeout(() => {//宏任务2
    console.log('9');
    Promise.resolve().then(() => {
        console.log('10');
    })
    new Promise((resolve) => {
        console.log('11');
        resolve();
    }).then(() => {
        console.log('12')
    })
})

// 第一轮
//1
//7
//------
//12
//8
//2
//4
//3
//5
//9
//11
//10
//12
