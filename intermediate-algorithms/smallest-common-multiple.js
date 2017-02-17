/********
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

- Smallest Common Multiple
********/

function smallestCommons(arr) {
  // Create new array. Add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  var lcm = 0;
  var loop = 1;
  var num;

  // While n is not the same as the array length.
  do {
    lcm = newArr[0] * loop * newArr[1];
    for (num = 2; num < newArr.length; num++) {
      if (lcm % newArr[num] !== 0) {
        break;
      }
    }

    loop++;
  } while (num !== newArr.length);

  return lcm;
}

smallestCommons([1,5]);
