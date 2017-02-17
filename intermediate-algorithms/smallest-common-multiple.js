/********
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

- Smallest Common Multiple
********/

function smallestCommons(arr) {
  var range = [];
  // loop through range of numbers and push into new array
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }
  
  // use reduce array to single value (lcm) by evaluating the gcd
  return range.reduce(function(previousValue, currentValue) {
    var gcdPrevCurr = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / gcdPrevCurr;
  });

  // Euclidean Algorithm
  function gcd(x, y) {
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
  }
}

smallestCommons([1,5]);
