let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length > 0) {
    let removedLunch = arr.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length > 0) {
    let removedLunch = arr.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length > 0) {
    let lunchNum = Math.floor(Math.random() * arr.length);
    let randomLunch = arr[lunchNum];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    let list = arr.join(", ");
    console.log(`Menu items: ${list}`);
  } else {
    console.log("The menu is empty.");
  }
}

console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
console.log(addLunchToStart(lunches, "Sushi"));
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(getRandomLunch(["Sushi", "Pizza", "Burger"]));
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
