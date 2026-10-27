function convertHTML(str) {
  let convStr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == `&`) {
      convStr.push(`&amp;`);
    } else if (str[i] == "<") {
      convStr.push(`&lt;`);
    } else if (str[i] == ">") {
      convStr.push(`&gt;`);
    } else if (str[i] == '"') {
      convStr.push(`&quot;`);
    } else if (str[i] == "'") {
      convStr.push(`&apos;`);
    } else {
      convStr.push(str[i]);
    }
  }
  return convStr.join("");
}

let convertedStr = convertHTML("Dolce & Gabbana");
console.log(convertedStr);
