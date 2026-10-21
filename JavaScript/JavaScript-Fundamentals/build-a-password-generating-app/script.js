/*create a function called generatePassword that takes a parameter, indicating the length of generated password. \
function should return a string which represents a randomly generated password. You should use the following 
string and different Math methods to help you return a new string with random characters in it: 
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()*/
function generatePassword(passLength) {
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = "";
  let charsLength = chars.length;

  for (let i = 0; i < passLength; i++) {
    let randomInt = Math.floor(Math.random() * charsLength);
    let randomChar = chars[randomInt];
    pass += randomChar;
  }
  return pass;
}

let password = generatePassword(37);
console.log(`Generated password: ${password}`);
