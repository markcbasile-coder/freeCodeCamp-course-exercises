function titleCase(str) {
  let strArr = str.split(" ");
  let titleCaseArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    titleCaseArr.push(newWord);
  }
  return titleCaseArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
