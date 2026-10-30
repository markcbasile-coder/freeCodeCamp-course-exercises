/*create a function that takes an initial array as its first argument,
followed by one or more additional arguments representing the values
to remove*/
function destroyer(arr, ...args) {
  let destroyedArr = arr.filter((arg) => !args.includes(arg));

  return destroyedArr;
}

let destroyed = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyed);
