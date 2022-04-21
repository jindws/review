// Function.prototype.bind2 = function (context){
//     if (typeof this !== "function") {
//         throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
//     }
//     var self = this;
//
//     var args = Array.prototype.slice.call(arguments, 1);
//
//     function fun(){
//         return self.call(context,args)
//     }
//     return fun
// }
// function fun(){
//     this.age=10
//     console.log(this)
// }
// var obj = {c:'c'}
// // fun.bind(obj)()
// fun.bind2(obj,1,2,3)()
//
//


Function.prototype.bind2 = function(obj){
    const args = Array.prototype.slice.call(arguments, 1);
    return ()=> {
        this.prototype = obj
        new this(...args)
        // this.apply(obj,args)
    }
}


function test(s){
    console.log(s+this.age)
}

test.bind2({age:2},1)()
