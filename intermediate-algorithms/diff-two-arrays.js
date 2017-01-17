/******************
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
*******************/

function diffArray(arr1, arr2) {
  // create empty array to hold numbers that differ
  var newArr = [];
  // compare numbers within each array to other array
  arr1.filter(arr2); // BUT ARR2 IS NOT A FUNCTION
  // return newArr
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
