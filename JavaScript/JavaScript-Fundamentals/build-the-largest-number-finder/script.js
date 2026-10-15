function largestOfAll(arr) {
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > num) {
        num = arr[i][j];
      }
    }
    finArr.push(num);
  }
  return finArr;
}

console.log(
  largestOfAll([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ]),
);
