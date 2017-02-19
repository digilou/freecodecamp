/********
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Array.prototype.filter()
********/

// Soluiton using for loop
function findElement(arr, func) {
  let num = 0;
  for(let i = 0; i <= arr.length; i++){
    if(func(arr[i])){
       num = arr[i];
       return num;
     }
   }
  return num;
}

// Solution using .filter()function findElement(arr, func) {
function findElement (arr, func){
  var filtered = arr.filter(func);
  return filtered[0];
}

// test
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
