function pyramid(str, rows, bool) {
  let pyramidArr = [];

  //pyramid facing down for true
  if (bool) {
    for (let i = 0; i < rows; i++) {
      if (i === 0) {
        pyramidArr.push("\n" + str.repeat(rows * 2 - 1));
      } else {
        pyramidArr.push("\n" + " ".repeat(i) + str.repeat((rows - i) * 2 - 1));
      }
    }
  }
  //pyramid facing up for false
  if (!bool) {
    for (let i = 0; i < rows; i++) {
      if (i === 0) {
        pyramidArr.push("\n" + " ".repeat(rows - 1) + str.repeat(i + 1));
      } else {
        pyramidArr.push(
          "\n" + " ".repeat(rows - 1 - i) + str.repeat(i * 2 + 1),
        );
      }
    }
  }
  //making a string to return
  let pyrStr = pyramidArr.join("");

  //return string with a new line at the end
  return pyrStr + "\n";
}

console.log(pyramid("o", 4, false));
