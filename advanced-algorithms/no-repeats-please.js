/********
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

- Permutations
- RegExp
********/

function permAlone(str) {
  
  // Heap's algorithm https://en.wikipedia.org/wiki/Heap%27s_algorithm
  
  // catch repeating characters
  const pattern = new RegExp('', 'gi');
  
  // permutations should be an array of joined strings
  
  // return total number of permutations
  return str;
}

permAlone('aab');
