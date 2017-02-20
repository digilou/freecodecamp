/********
Flatten a nested array. You must account for varying levels of nesting.

- Array.isArray()
********/

function steamrollArray(arr) {
  // flatten array with recursion and checking if each element isArray to flatten and concat
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}


steamrollArray([1, [2], [3, [[4]]]]);
