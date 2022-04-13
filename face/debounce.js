function debounce(fn,inter){
    let si;
    return function (...args){
        clearInterval(si)
        si = setTimeout(fn.bind(this,...args),inter)
    }
}

function fun(a,b){
    console.log(a+b)
}

const fn = debounce(fun,1000)
