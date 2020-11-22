module.exports = function (source,sourceMap,ast){
    console.log(this.query)
    // return source//1.直接返回

    /**
     * err|null
     * result
     */
    // this.callback(null,source)//2.推荐使用callback
    const callback = this.async()//3.异步
    setTimeout(()=>{
        callback(null,source)
    },100)

}