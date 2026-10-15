function repeatStringNumTimes(str, num) {
  let repeatedString = "";

  if (num <= 0) {
    return "";
  } else {
    for (let i = num; i >= 1; i--) {
      repeatedString += str;
    }
  }

  return repeatedString;
}

console.log(repeatStringNumTimes("*", 3));
