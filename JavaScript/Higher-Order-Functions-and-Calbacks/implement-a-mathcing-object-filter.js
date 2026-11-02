/*create a function that filters an array of
objects and returns only those objects that match
all key-value pairs in a given source object.*/
function whatIsInAName(arr, source) {
  const sourceEntries = Object.entries(source);

  /*return a new array containing only the objects
  from the collection that have all the key–value
  pairs present in the source object.*/
  return arr.filter((obj) => {
    return sourceEntries.every(([key, value]) => {
      return obj.hasOwnProperty(key) && obj[key] === value;
    });
  });
}

let whatIsName = whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 },
  ],
  { apple: 1, bat: 2 },
);
console.log(whatIsName);
