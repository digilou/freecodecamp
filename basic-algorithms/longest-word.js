function findLongestWord(str) {
  // split sentence into array
  var strArray = str.split(' ');
  // keep track of maximum length
  var longestWord = 0;
  // cycle through array
  for(var i = 0; i < strArray.length; i++){
    // compare current word to previous word
    if(strArray[i].length > longestWord){
      // store longest word
      longestWord = strArray[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
