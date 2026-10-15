function truncateString(str, num) {
  let truncString;

  if (str.length > num) {
    truncString = str.slice(0, num) + "...";
    return truncString;
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
