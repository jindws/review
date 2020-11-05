function getPrototypeChain(obj){
    const chain = []
    while(obj = Object.getPrototypeOf(obj)){
        chain.push(obj)
    }
    return chain
}

console.log(getPrototypeChain({
    a:1
}))