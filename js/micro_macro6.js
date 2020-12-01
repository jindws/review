async function async1() {
    console.log('async1 start');//2
    new Promise((resolve, reject) => {
        try {
            throw new Error('error1')
        } catch(e) {
            console.log(e);//3
        }
        setTimeout(() => {//宏任务2
            resolve('promise4')
        }, 3 * 1000);
    })
        .then((res) => {
            console.log(res);
        }, err => {
            console.log(err);
        })
        .finally(res => {
            console.log(res);
        })
    console.log(await async2());
    console.log('async1 end');
}

function async2() {
    console.log('async2');//4
    return new Promise((resolve) => {
        setTimeout(() => {//宏任务3
            resolve(2)
        }, 1 * 3000);
    })
}

console.log('script start');//1

setTimeout(() => { // 宏任务1
    console.log('setTimeout');
}, 0)

async1();

new Promise((resolve) => {
    console.log('promise1');//5
    resolve();
})
    .then(() => {//微任务1-1
        console.log('promise2');
        return new Promise((resolve) => {
            resolve()
        })
            .then(() => {
                console.log('then 1-1')
            })
    })
    .then(() => {
        console.log('promise3');
    })


console.log('script end')//6


//script start
//async1 start
//error1
//async2
//promise1
//script end
///////////////////////////微任务
//promise2
//then 1-1
//promise3
///////////////////宏任务1
//setTimeout
///////////////////宏任务2
//promise4
//undefined
//宏任务3
//2
//async1 end