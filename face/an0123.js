// fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']
function fun(data=[]){
    let result = []
    function f(data,index=0,str='') {
        const next = data[index]
        if(!next)return result.push(str)
        index++;
        for(let itm of next){
            f(data,index,str+itm)
        }
    }
    f(data)
    return result;
}

console.log(fun([['a', 'b'], ['n', 'm'], ['0', '1']]))