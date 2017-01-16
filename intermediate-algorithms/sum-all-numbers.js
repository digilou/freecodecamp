/*****
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.
Math.max()
Math.min()
Array.prototype.reduce()
*******/

// answer started.....

function sumAll(arr) {
  return arr.reduce(function(a,b){
    return a + b;
  }, 0);
}

sumAll([1, 4]);
