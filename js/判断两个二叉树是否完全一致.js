
function diff(x,y){
    if(!x&&!y)return true
    if(!x||!y)return false
    if(x.value!==y.value)return false
    return diff(x.left,y.left)&&diff(x.right,y.right)
}


const result = diff(
    {value: 1, left: {value: 2}, right: {value: 3}},
    {value: 1, left: {value: 2, left: {value: 1}, right: {value: 3}}}
)


console.log(result)//false

console.log(diff(
    {value: 1, left: {value: 2}, right: {value: 3}},
    {value: 1, left: {value: 2}, right: {value: 3}},
))//true