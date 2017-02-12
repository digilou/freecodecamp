/********
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

    Arguments object

    Array.prototype.reduce()
********/

function uniteUnique(arr) {
  var newArr = [];
  // find how many arguments are given
  var args = [].slice.call(arguments);
  // loop through array using reduce or map
  newArr = args.reduce(function(a,b){
    // filter out duplicates
    return a.concat(b.filter(function(i){
      return a.indexOf(i) === -1;
    }));
  });
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
