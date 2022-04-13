
function quickSort(list){
    if (list.length < 2) return list
    const itm = list.at(-1)
    const right = list.filter(it=>it>itm)
    const left =  list.filter(it=>it<itm)
    const same =  list.filter(it=>it===itm)
    return [...quickSort(left),...same,...quickSort(right)]
}

// function quickSort(array) {
//     let pivot = array[array.length - 1]
//     let left = array.filter((v, i) => v <= pivot && i != array.length -1)
//     let right = array.filter(v => v > pivot)
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }



console.log(quickSort([4,7,2,8,3,1,4,6,9,6,3,1,2,45,89,-2,3,4]))