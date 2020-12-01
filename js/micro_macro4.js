new Promise((resolve, reject) => {
    console.log(1)//1
    resolve()
}).then(() => {
    console.log(2)//2
    new Promise((resolve, reject) => {
        console.log(3)//3
        setTimeout(() => {
            reject();
        }, 3 * 1000);
        resolve()
    }).then(() => {//微任务1
        console.log(4)//4
        new Promise((resolve, reject) => {
            console.log(5)//5
            resolve();
        })
            .then(() => {
                console.log(7)//微任务3
            })
            .then(() => {
                console.log(9)//微任务5
            })
    })
    .then(() => {
        console.log(8)//微任务4
    })
})
.then(() => {//微任务2
    console.log(6)
})

// 1 2 3|4 5 6 7 8 9