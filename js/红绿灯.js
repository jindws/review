//红300ms---黄200ms---绿100ms

let light = ''
 function execute(){
    // let colorArr = ['red','yellow','green']
    fun()
}


function fun(i=0){
    let colorArr = ['red','yellow','green']
    const time = {
        red:300,
        yellow:200,
        green:100,
    }
    light = colorArr[i]
    console.log(light)
    setTimeout(()=>{
        fun((i+1)%3)
    },time[colorArr[i]])
}


execute()