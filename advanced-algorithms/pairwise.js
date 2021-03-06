/********
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
Index	0	1	2	3	4
Value	7	9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

- Array.prototype.reduce()
********/

function pairwise(arr, arg) {
  // find pairs within arr where sum === arg
  let pairs = [];
  
  // check first number...
  for(let a in arr){
    let temp1 = arr[a];
    // ...against second number
    for(let i = 1; i < arr.length; i++){
      let temp2 = arr[i];
      if(temp1 + temp2 === arg && i > a && pairs.indexOf(+a) === -1 && pairs.indexOf(+i) === -1){
        pairs.push(+a, +i);
        break;
      }
    }
  }
  if(pairs.length >= 1){
  // return sum of indices of those numbers that pair
    let sum = function(a,b){
      return a + b;
    };
    return pairs.reduce(sum);
  }else{
    return 0;
  }
  
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
