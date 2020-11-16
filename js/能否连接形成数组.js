var canFormArray = function(arr, pieces) {
    let test = arr.toString()+','
    for(let piece of pieces){
        if(!test.includes(piece.toString()+',')){
            return false
        }
    }
    return true
};

console.log(canFormArray([85],[[85]]))