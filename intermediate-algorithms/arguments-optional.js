/********
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

- Closures
- Arguments object
- Array.prototype.reduce
- Array.prototype.some
- Array.from

********/
function addTogether() {
  // create array-like iterable object for arguments provided
  const arr = Array.from(arguments);
  // check is numbers are numbers else return undefined
  return arr.some(num => typeof num != 'number') ?
    undefined :
    // check how many arguments are provided
    arr.length > 1 ?
      // add the arguments if greater than 1
      arr.reduce((acc, num) => acc += num, 0) :
      (num) => typeof num === 'number' ?
        num + arr[0] :
        undefined;
}

addTogether(2,3);
