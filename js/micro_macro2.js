console.log('script start');//0-1

setTimeout(() => {
    console.log('last');//宏任务1
}, 1 * 2000);

Promise.resolve()
    .then(function() {
        console.log('promise1');//微任务1
    }).then(function() {//微任务1 执行后入队
    console.log('promise2');//微任务4
});


async function foo() {
    await bar()//0-2
    console.log('async1 end')//微任务2
}
foo()

async function errorFunc () {
    try {
        await Promise.reject('error!!!')
    } catch(e) {
        console.log(e)//微任务3
    }
    console.log('async1');//微任务3后执行
    return Promise.resolve('async1 success')//微任务3后入队
}
errorFunc().then(res => console.log(res))//微任务5

function bar() {
    console.log('async2 end')//0-2
}

console.log('script end');//0-3

//0-
//script start
//async2 end
//script end
//微任务
//promise1
// async1 end
//error
//async1
//promise2
//async1 success
//last