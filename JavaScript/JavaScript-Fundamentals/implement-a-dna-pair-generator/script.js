function pairElement(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "A") {
      arr.push([str[i], "T"]);
    } else if (str[i] == "T") {
      arr.push([str[i], "A"]);
    } else if (str[i] == "C") {
      arr.push([str[i], "G"]);
    } else if (str[i] == "G") {
      arr.push([str[i], "C"]);
    }
  }
  return arr;
}

let dna = pairElement("ATCGA");
console.log(dna);
