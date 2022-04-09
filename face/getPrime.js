// getPrime 每次得到一个新的质数

function check(n) {
    const max = Math.floor(Math.sqrt(n))
    for (let i = 2; i <= max; i++) {
        if (!(n % i)) return false
    }
    return true
}

var getPrime = (function (){
    let num = 1;
     return function (){
        for(let i = num+1;;i++){
            if(check(i)){
                num=i;
                return i
            }
        }
    }
})()
console.log(getPrime())
