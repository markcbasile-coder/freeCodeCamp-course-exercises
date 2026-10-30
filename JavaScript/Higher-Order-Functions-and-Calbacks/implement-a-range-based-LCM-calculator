/*create a function that takes an array of two
numbers and returns the least common multiple (LCM)
of those two numbers and all the numbers between
them.*/
function smallestCommons(arr) {
  /*return the smallest common multiple that is
  evenly divisible by both numbers and all
  sequential numbers in the range between them.*/
  let smallNum = Math.min(...arr);
  let bigNum = Math.max(...arr);
  let fullArr = [];

  for (let i = smallNum; i <= bigNum; i++) {
    fullArr.push(i);
  }

  let i = bigNum;

  while (!fullArr.every((num) => i % num === 0)) {
    i++;
  }

  return i;
}

let lcm = smallestCommons([1, 13]);
console.log(lcm);
