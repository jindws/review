/**
 * @desc 冒泡排序
 */

const arr = String(Math.random())
  .substring(0, 11)
  .split("")
  .filter((itm) => !isNaN(+itm));

function sort(array) {
  const _array = [...array];
  return _array.sort((a, b) => {
    return a - b;
  });
}

function bubbleSort(array) {
  // let temp;//暂存数据
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    //控制循环次数
    for (let j = 0; j < length - i; j++) {
      if (array[j] > array[j + 1]) {
        //找到最大值放到最后，下次找第二大放次后
        // temp = array[j]
        // array[j] = array[j+1]
        // array[j+1] = temp
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; //es6
      }
    }
  }
  return array;
}

console.log("sort", sort(arr));
console.log("bubbleSort", bubbleSort(arr));
