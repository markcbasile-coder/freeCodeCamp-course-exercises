function dropElements(arr, func) {
  let droppedArr;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      droppedArr = arr.slice(i);
      return droppedArr;
    }
  }
  return [];
}

let dropped = dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
console.log(dropped);
