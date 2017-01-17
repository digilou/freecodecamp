/*****
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.
Math.max()
Math.min()
Array.prototype.reduce()
*******/

// answer started.....

function sumAll(arr) {
  // find lowest number
  var min = Math.min(arr[0], arr[1]);
  // find highest number
  var max = Math.max(arr[0], arr[1]);
  // create placeholder for numbers to add up
  var num = 0;
  // iterate through lowest to highest number to get the sum
  for(var i = min; i <= max; i++){
    num += i;
  }
  // don't forget to return the final sum
  return num;
}
