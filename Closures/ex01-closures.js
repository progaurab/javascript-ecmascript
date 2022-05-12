  /*
  Examine the following code and complete it according to the result shown in the task below.
  
  Call the function assigned to hidden, passing it the proper parameter so that when this program runs, it prints the message "Result is: 54" to the console.
  */

function mystery() {
    let secret = 6;
    function mystery2(multiplier) {
      multiplier *= 3;
      return secret * multiplier;
    }
    return mystery2;
  }
  
  let hidden = mystery();
  let result = // add function call here
  
  console.log('Result is: ' + result);
  
