let count = 0;

function cardCounter(card) {
  let currentCount = 0 + count;
  switch (card) {
    case 2:
      currentCount++;
      break;
    case 3:
      currentCount++;
      break;
    case 4:
      currentCount++;
      break;
    case 5:
      currentCount++;
      break;
    case 6:
      currentCount++;
      break;
    case 7:
      currentCount;
      break;
    case 8:
      currentCount;
      break;
    case 9:
      currentCount;
      break;
    case 10:
      currentCount--;
      break;
    case "J":
      currentCount--;
      break;
    case "Q":
      currentCount--;
      break;
    case "K":
      currentCount--;
      break;
    case "A":
      currentCount--;
      break;
  }
  count = currentCount;
  if (currentCount > 0) {
    currentCount = currentCount;
    return count + " Bet";
  } else {
    currentCount = currentCount;
    return count + " Hold";
  }
}
