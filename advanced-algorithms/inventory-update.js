/********
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

- Global Array Object
********/

function updateInventory(arr1, arr2) {
  // compare arr1 and arr2 (2D arrays)
  // update arr1 with arr2 quantities
  // add items that may not exist

  // return in alphabetical order
  // use sort by targeting the string in the array
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
