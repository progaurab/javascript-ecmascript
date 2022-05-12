/*
The code is even trickier now. It may take a couple attempts in order to understand it. Don’t worry, all developers do that. Take your time and read through it carefully.

Call the function assigned to jumble, passing it the proper parameter so this program prints the message "Result is: 122" to the console.
*/

function mystery(input) {
    let secret = 4;
    input += 2;
    function mystery2(multiplier) {
      multiplier *= input;
      return secret * multiplier;
    }
    return mystery2;
  }
  
  function mystery3(param) {
    function mystery4(bonus) {
      return param(6) + bonus;
    }
    return mystery4;
  }
  let hidden = mystery(3);
  let jumble = mystery3(hidden);
  let result = jumble(2)// add function call here
  
  console.log('Result is: ' + result);
  
  