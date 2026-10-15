function frankenSplice(arr1, arr2, index) {
  if (arr2.length === 0) {
    return arr1;
  }

  const arr1Copy = arr1.slice();
  const arr2Copy = arr2.slice();

  arr2Copy.splice(index, 0, ...arr1Copy);
  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
