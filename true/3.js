
function fun(num,arr){
    arr.sort((a,b)=>a-b)
    const obj = {}
    let result = 0
    for(let itm of arr){
        if([itm-num] in obj)result++
        obj[itm]=1
    }
    return result
}

// console.log(fun(3,[1,3,2,5,4]))
console.log(fun(3,[1,4,7]))