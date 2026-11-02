/*Compare two arrays and return a new array with any items found in
only one of the two given arrays, but not both. In other words, return
the symmetric difference of the two arrays.*/
function diffArray(arr1, arr2) {
  let filteredArr1 = arr1.filter((word) => !arr2.includes(word));
  let filteredArr2 = arr2.filter((word) => !arr1.includes(word));
  let finalArr = [];

  if (filteredArr1.length > 0) {
    finalArr.push(...filteredArr1);
  }

  if (filteredArr2.length > 0) {
    finalArr.push(...filteredArr2);
  }
  return finalArr;
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
