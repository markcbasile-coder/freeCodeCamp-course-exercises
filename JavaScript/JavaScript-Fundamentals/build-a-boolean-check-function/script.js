/*Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function called booWho that receives one argument.
If the argument received is a boolean primitive, the function should return true.
If the argument is any other value, the function should return false.
Tests:
Passed:1. You should have a booWho function.
Passed:2. booWho(true) should return true.
Passed:3. booWho(false) should return true.
Passed:4. booWho([1, 2, 3]) should return false.
Passed:5. booWho([].slice) should return false.
Passed:6. booWho({ "a": 1 }) should return false.
Passed:7. booWho(1) should return false.
Passed:8. booWho(NaN) should return false.
Passed:9. booWho("a") should return false.
Passed:10. booWho("true") should return false.
Passed:11. booWho("false") should return false.*/

function booWho (arg) {
  return arg === true || arg === false ? true : false;
}