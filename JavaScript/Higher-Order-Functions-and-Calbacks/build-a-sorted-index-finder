/*create a function that returns the lowest index at which a value
should be inserted into an array once it has been sorted in ascending
order.*/
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let index = arr.findIndex((curr) => curr >= num);
  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([3, 10, 5], 11));
