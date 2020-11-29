//评测题目1: Observer的实现，请按照要求实现Observer
var o = {
  a: 1,
  b: 2,
  c: {
    x: 1,
    y: 2
  }
}

observer(o, ['a', 'c.x'], (v, prev) => {
         console.log(v);
				 console.log(prev);
});

// o.a = 2;// 1, 2
// o.b = 3;// 不打印
// o.c.x = 3;// 1, 3

function observer(obj, path, cb) {
    path.forEach(itm=>{
        const [ob,child] = itm.split('.')
        if(child){
            return observer(obj[ob], [child], cb)
        }

        const value = obj[itm]
        Object.defineProperty(obj,itm,{
            set: function(val) {
                const tmp = this.value || value
                this.value = val
                cb(tmp,val)
            },
            get:function (){
                return this.value || value
            }
        })
    })
}
