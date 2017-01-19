/******************
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
*******************/

function diffArray(arr1, arr2) {
  // create new array that combines arr1 && arr2
  var newArr = arr1.concat(arr2);
  // create function that compares each number from each array
  function compare(num){
    if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1){
       return num;
    }
  }
  // filter the new array && compare action
  return newArr.filter(compare);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
