function throttle(fn,inter){
    let time = 0;
    return function (...args){
        if(time+inter>Date.now())return
        fn.apply(this,args)
        time = Date.now()
    }
}


function fun(a,b){
    console.log(a+b)
}

const fn = throttle(fun,1000)

setInterval(()=>{
    fn(1,2)
},100)