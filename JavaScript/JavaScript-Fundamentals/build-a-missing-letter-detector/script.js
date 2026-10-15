function fearNotLetter(str) {
  let fearStr = str.toLowerCase().split("");
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let startLetterIndex = alpha.indexOf(fearStr[0]);
  let fearNum = 0;

  for (let i = 0; i <= fearStr.length; i++) {
    if (alpha[startLetterIndex + i] != fearStr[fearNum]) {
      return alpha[startLetterIndex + i];
    } else if (alpha[startLetterIndex + i] == fearStr[fearNum]) {
      fearNum += 1;
    }
  }
}

let result = fearNotLetter("stvwx");
console.log(result);
