/**
 * @desc 选择排序
 */
const arr = String(Math.random()).substring(0,11).split('').filter(itm=>!isNaN(+itm))

function sort(array){
    const _array = [...array]
    return _array.sort((a,b)=>{
        return a-b
    })
}

function selectSort(array){
    const {length} = array
    for(let i=0;i<length-1;i++){//控制循环次数
        let index = 0;
        for(let j=0;j<length-i;j++){
            if(array[j]>array[index]){//寻找最大的数
                index = j
            }
        }
        [array[index],array[length-i-1]] = [array[length-i-1],array[index]]//es6
    }
    return array
}

console.log('sort',sort(arr))
console.log('selectSort',selectSort(arr))
