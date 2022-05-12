/*
The code is a little bit different this time, but I’m sure we can use our knowledge about closures to complete the missing snippet.

Call the function assigned to hidden, passing it the proper parameter so this program prints the message "Result is: 40" to the console.
*/

function mystery(input) {
    let secret = 5;
    function mystery2(multiplier) {
   	 multiplier *= input;
   	 return secret * multiplier;
    }
    return mystery2;
}
let hidden = mystery(4);
let result = // add function call here

console.log("Result is: " + result);

