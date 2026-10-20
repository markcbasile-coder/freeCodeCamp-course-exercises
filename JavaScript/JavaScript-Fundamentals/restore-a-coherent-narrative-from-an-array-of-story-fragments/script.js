const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

/*takes an array of fragments and returns a new array with all undefined elements removed*/
function compactFragments(arr) {
  let copyArr = [...arr];
  let compactedArr = [];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] == undefined) {
      console.log(`[COMPACTED] - Removed undefined item at array ${i}`);
      continue;
    } else {
      compactedArr.push(copyArr[i]);
      continue;
    }
  }
  return compactedArr;
}

//array produced using the compactFragments function
let compactedShuffledFragments = compactFragments(shuffledFragments);

/*takes an array of fragments without undefined elements and returns a new 
array sorted by the id property in ascending order, keeping fragments that 
share the same id in their original order*/
function sortFragments(arr) {
  let copyArr = [...arr];

  //insertion sort
  for (let i = 1; i < copyArr.length; i++) {
    let current = copyArr[i];
    let j = i - 1;

    while (j >= 0 && copyArr[j].id > current.id) {
      copyArr[j + 1] = copyArr[j];
      j--;
    }
    copyArr[j + 1] = current;
  }
  return copyArr;
}

//array produced using the sortFragments function
let sortedFragments = sortFragments(compactedShuffledFragments);

/*takes a sorted array of fragments and returns a new array with duplicates 
removed, keeping only the first occurrence. You should define duplicates as 
two or more fragments sharing the same id. For each id that is deduplicated, 
the function should log a message to the console. The message should start 
with the prefix [DEDUPED]*/
function dedupeFragments(arr) {
  let noDupeArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].id === noDupeArr[noDupeArr.length - 1].id) {
      console.log(`[DEDUPED] Duplicate found for id: ${arr[i].id}`);
    } else {
      noDupeArr.push(arr[i]);
    }
  }
  return noDupeArr;
}

//array produced using the dedupeFragments function
let dedupedFragments = dedupeFragments(sortedFragments);

/*takes a sorted array of fragments and returns a new array with missing 
fragments filled with placeholder objects. You should define missing fragments 
as gaps in the sequence between the lowest and highest id.*/
function fillMissingFragments(arr) {
  let copyArr = [...arr];

  for (let i = 0; i < copyArr.length - 1; i++) {
    if (copyArr[i].id != copyArr[i + 1].id - 1) {
      console.log(`[FILLED] spot ${i + 2}`);
      copyArr.splice(i + 1, 0, { id: i + 2, text: "[...]" });
    }
  }
  return copyArr;
}

//array produced using the fillMissingFragements function
let filledFragments = fillMissingFragments(dedupedFragments);

/*takes a sorted array of fragments and returns a single string containing 
all fragment texts, separated by newlines*/
function assembleStory(arr) {
  let story = "";

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      story += arr[i].text;
    } else {
      story += arr[i].text + "\n";
    }
  }
  return story;
}

console.log(assembleStory(filledFragments));
