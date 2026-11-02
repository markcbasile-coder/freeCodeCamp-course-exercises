function steamrollArray(arr) {
  let rolledArr = [];

  function nestedArr(item) {
    if (!Array.isArray(item)) {
      rolledArr.push(item);
    } else {
      for (let i = 0; i < item.length; i++) {
        nestedArr(item[i]);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    nestedArr(arr[i]);
  }

  return rolledArr;
}

let rolled = steamrollArray([1, [2], [3, [[4]]]]);
console.log(rolled);
