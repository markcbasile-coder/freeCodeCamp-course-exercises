function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  let isTrue = true;

  for (let char of secondWord) {
    if (firstWord.includes(char)) {
      isTrue = true;
    } else {
      isTrue = false;
      break;
    }
  }
  return isTrue;
}

console.log(mutation(["hello", "neo"]));
