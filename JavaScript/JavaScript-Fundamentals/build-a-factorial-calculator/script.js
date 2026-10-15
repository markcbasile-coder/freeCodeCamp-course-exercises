const num = 5;

function factorialCalculator(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
    console.log(result);
  }

  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
