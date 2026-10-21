function uniteUnique(...args) {
  let newArr = args.join().split(",");
  let uniqueArr = [];

  if (newArr.length === 0) {
    return uniqueArr;
  }

  for (let i = 0; i < newArr.length; i++) {
    let index = -1;
    if (!uniqueArr.includes(Number(newArr[i]))) {
      uniqueArr.push(Number(newArr[i]));
    }
  }
  return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
