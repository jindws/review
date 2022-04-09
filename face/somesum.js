



function fun(arr,need){
    const sum = arr.reduce((a,b)=>a+b)
    if(sum<need)return 0
    if(sum===need)return 1
    const needDone = (sum - need)/2;
    if(needDone%1)return 0;

    arr = arr.filter(itm=>itm<=needDone)
    const obj = {0:1}
    let result = 0;
    for(let itm of arr){
        if((needDone-itm) in obj)result++
        obj[itm]=1
    }
    return result
}


console.log(fun([1,1,1,1,1],3))
console.log(fun([1,2,3,4,5],5))