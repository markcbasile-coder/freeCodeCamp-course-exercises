//check if word is palindrome
function isPalindrome(word) {
  let lowerWord = word.toLowerCase();
  let revWord = lowerWord.split("").reverse().join("");
  return lowerWord === revWord ? true : false;
}

//take array of words and return indecies of non-palindromes
function findPalindromeBreaks(words) {
  let finArray = [];

  //return empty array if array is empty
  if (words.length == 0) {
    return finArray;
  }

  //pushing the indecies of the non-palindromes to the array
  for (let i = 0; i < words.length; i++) {
    let palindrome = isPalindrome(words[i]);
    if (palindrome === false) {
      finArray.push(i);
    }
  }
  return finArray;
}

function findRepeatedPhrases(words, phraseLength) {
  //if the phrase is as long as or longer than the array, return empty
  if (phraseLength >= words.length) {
    return [];
  }

  //extract every possible phrase of `phraseLength` and turn it into a string
  let phrases = [];
  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");
    phrases.push(phrase);
  }

  //count how many times each unique phrase appears in the array
  let counts = {};
  for (let phrase of phrases) {
    counts[phrase] = (counts[phrase] || 0) + 1;
  }

  //loop back through the start indices and keep any index whose phrase appears more than once
  let resultIndices = [];
  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");
    if (counts[phrase] > 1) {
      resultIndices.push(i);
    }
  }

  return resultIndices;
}

//use the above functions to return objects with repeatedPhrases and palindromeBreaks
function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  let textObject = [];
  for (let arr of texts) {
    let rP = findRepeatedPhrases(arr, phraseLength);
    let pB = findPalindromeBreaks(arr);
    textObject.push({ repeatedPhrases: rP, palindromeBreaks: pB });
  }

  return textObject;
}
