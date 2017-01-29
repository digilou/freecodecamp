/*******
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Here are some helpful links:
    Global Object
    Object.prototype.hasOwnProperty()
    Object.keys()
**********/

// Attempted solution
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  
  for (let i = 0; i < collection.length; i++) {
    let result = 0;
    
    for (let j = 0; j < sourceKeys.length; j++) {
      if(collection[i].hasOwnProperty(sourceKeys[j]) && collection[i][sourceKeys[j]] === source[sourceKeys[j]]){
        result++;
      }
    }
      
    if(result >= sourceKeys.length){
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });