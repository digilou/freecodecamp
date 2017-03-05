/********
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

- Permutations
- RegExp
********/

function permAlone(str) {
  
  // Heap's algorithm https://en.wikipedia.org/wiki/Heap%27s_algorithm
  
  // catch repeating consecutive characters
  const pattern = /(.)\1+/g;
  
  // permutations should be an array of joined strings
  const arr = str.split('');
  let permut = [];
  let holding;
  
  // if string contains same character, return 0
  if(str.match(pattern) !== null && str.match(pattern)[0] === str){
    return 0;
  }
  
  // switch around content of variables
  const swap = (i,j) => {
    holding = arr[i];
    arr[i] = arr[j];
    arr[j] = holding;
  };
  // create permutations array using Heap's algorithm
  const heaps = function (int) {
    if (int === 1) {
      permut.push(arr.join(''));
    } else {
      for (let i = 0; i != int; i++) {
        heaps(int - 1);
        swap(int % 2 ? 
             0 : i, int - 1);
      }
    }
  };
  heaps(arr.length);
  
  // filter out repeated permutations
  const filter = permut.filter(string => !string.match(pattern));

  
  // return total number of permutations that are not repeated
  return filter.length;
}

permAlone('aab');

