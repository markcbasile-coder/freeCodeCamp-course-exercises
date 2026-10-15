function confirmEnding(sent, end) {
  let chkLength = end.length;
  let chkEnd = sent.slice(-chkLength);
  let sentEnd = end.slice(-chkLength);
  if (chkEnd == sentEnd) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Bastian", "n"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification",
  ),
);
console.log(confirmEnding("He has to give me a new name", "name"));
