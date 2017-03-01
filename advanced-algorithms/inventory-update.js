/********
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

- Global Array Object
********/

function updateInventory(arr1, arr2) {
  // create indicator to define if item is present or not
  var index;
  // loop through each array to compare items
  // and add on to existing quantities
  arr2.forEach(function(item1){
    index = 0;
    arr1.forEach(function(item2){
      if(item1[1] === item2[1]){
        item2[0] += item1[0];
        index = 1;
      }
    });
    // if item is non-existent, push the new items
    // into current inventory
    if(index === 0){
      arr1.push(item1);
    }
  });  

  // return in alphabetical order
  // use sort by targeting the second item in 2D array
  var sort = (a,b) => a[1] > b[1] ? 1 : -1;
  return arr1.sort(sort);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
