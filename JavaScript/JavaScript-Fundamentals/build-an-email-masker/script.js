function maskEmail (email) {
  let domain = email.slice(email.indexOf("@"));
  let firstLetter = email.slice(0, 1);
  let mask = email.slice(1, email.indexOf("@")-1);
  let maskRepeat = mask.length;
  let lastLetter = email.slice(email.indexOf("@")-1, email.indexOf("@"));
  let maskedEmail = firstLetter + "*".repeat(maskRepeat) + lastLetter + domain;
  return maskedEmail;  
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));