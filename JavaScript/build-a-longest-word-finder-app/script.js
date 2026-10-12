function findLongestWordLength(str) {
  let sentence = str.trim();
  let words = sentence.split(" ");
  let wordLength = 0;

  for (let word of words) {
    let count = 0;
    for (let char of word) {
      count++;
    }
    if (count >= wordLength) {
      wordLength = count;
    }
  }
  return wordLength;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology",
  ),
);
