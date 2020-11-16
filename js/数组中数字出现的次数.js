/**
 *@desc 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
 **/

var singleNumber = function(nums) {
    let obj ={};
    while(nums.length){
        const num = nums.pop();
        if(!obj.hasOwnProperty(num)){
            obj[num] = true
        }else{
            obj[num] = false
        }
    }
    return Object.entries(obj).find(([k,v])=>v)[0]
};

console.log(singleNumber([5,2,2,2,5,5,4]))

var singleNumbers = function(nums) {
    const obj = {}
    nums.forEach(itm=>{
        if(obj.hasOwnProperty(itm)){
            obj[itm] = false
        }else{
            obj[itm] = true
        }
    })

    return Object.entries(obj).filter(([k,v])=>v).map(([k])=>k)
};

console.log(singleNumbers([4,1,4,6]))
