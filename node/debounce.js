// function debounce(fn, time) {
//   let last;
//   return function () {
//     clearInterval(last);
//     last = setTimeout(fn, time);
//   };
// }

function debounce(func, wait) {
    var timeout;
    return function () {
        console.log(timeout)
        var context = this;
        var args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}


setInterval(()=>{
    debounce(()=>console.log(1),1000)()
},100)