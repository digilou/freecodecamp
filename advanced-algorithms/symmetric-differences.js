/********
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
Symmetric Difference
********/

function sym(args) {
  // convert arguments to array object using spread operator
  args = [...arguments];
  // find difference between arguments
  let getDiff = function(arr1, arr2) {
    // return items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }
    // filter each array against the other
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1));
  };
  // find the unique values
  const sdArr = args.reduce(getDiff,[]);
  // get the unique values
  let unique = sdArr.filter(function(e, i, self) {
    return i === self.indexOf(e);
    });
  return unique;
}

sym([1, 2, 3], [5, 2, 1, 4]);
