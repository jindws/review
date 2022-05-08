function Event(){
    this.cache = {}
    this.on = function (name,fn,once=false){
        if(!(name in this.cache)) this.cache[name] = []
        this.cache[name].push({
            fn,
            once,
        })
    }
    this.off = function (name,fn){
        const events = this.cache[name]||[]
        this.cache[name] = events.filter(itm=>itm.fn!==fn)
    }
    this.emit = function (name){
        const events = this.cache[name]||[]
        for(let i = 0;i<events.length;i++){
            const itm = events[i]
            itm.fn&&itm.fn()
            if(itm.once){
                this.cache[name].splice(i,1)
                i--;
            }
        }
    }
    this.once = function (name,fn){
        this.on.call(this,name,fn,true)
    }
}

const event = new Event()
function fun(){
    console.log(1)
}

function fun2(){
    console.log(2)
}

event.once('fun',fun)
event.on('fun',fun2)

// event.off('fun',fun)
event.emit('fun')
event.emit('fun')
