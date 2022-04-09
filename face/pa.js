// 实现多个请求并发执行，请求结果顺序显式

const request = [1,4,5,2,3].map((itm,index)=>{
    return new Promise(resolve=>setTimeout(()=>resolve(itm),Math.floor(1000/(index+1))))
})
const result = []

Promise.all(request).then(data=>{
    console.log(data)
})

