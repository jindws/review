Promise.resolve()
    .then(() => {//微任务1
        console.log('promise1');//0-1
        return new Promise((resolve, reject) => {
            setTimeout(() => {//宏任务2
                console.log('timer2')
                resolve()
            }, 0)
        }).then(async () => {
                await foo();
                return new Error('error1')
            }).then((ret) => {
                setTimeout(() => {//宏任务4
                    console.log(ret);//error1
                    Promise.resolve()
                        .then(() => {
                            return new Error('error!!!')
                        })
                        .then(res => {
                            console.log("then: ", res)
                        })
                        .catch(err => {
                            console.log("catch: ", err)
                        })
                }, 1 * 3000)
            }, err => {
                console.log('err',err);
            })
            .finally((res) => {//微任务1-1
                console.log(res);//undefined
                throw new Error('error2')
            })
            .then((res) => {
                console.log(res);//error2
            }, err => {
                console.log(err);
            })
    })
    .then(() => {
        console.log('promise2');
    })

function foo() {
    setTimeout(() => {//宏任务3
        console.log('async1');
    }, 2 * 1000);
}

setTimeout(() => {//宏任务1
    console.log('timer1')
    Promise.resolve()
        .then(() => {//微任务1-1
            console.log('promise3')
        })
}, 0)

console.log('start');//1
//start
//promise1
/////////////宏任务1
//timer1
//promise3
///////////宏任务2
//timer2
//undefined
//error2
//promise2
////////
// async1
//error1
//then: : error!!!