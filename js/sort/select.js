//选择排序
//O(n^2)

function select(list) {
  for (let i = 0; i < list.length - 1; i++) {
    const itm = list[i];
    let minIndex = i;
    for (let j = i + 1; i < list.length; j++) {
      if (list[minIndex] > list[j]) {
        //找到最小值
        minIndex = j;
      }
    }
    [list[i], list[minIndex]] = [list[minIndex], list[i]];
  }
  return list;
}

console.log(select([4, 7, 2, 8, 3, 1, 4, 6, 9, 6, 3, 1, 2, 45, 89, -2, 3, 4]));
