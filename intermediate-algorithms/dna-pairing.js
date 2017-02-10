/**************
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Array.prototype.push()
String.prototype.split()
**************/

function pairElement(str) {
  var pairArr = [];
  var find = function(letter){
    switch(letter){
      case 'A':
        pairArr.push(['A', 'T']);
        break;
      case 'T':
        pairArr.push(['T', 'A']);
        break;
      case 'C':
        pairArr.push(['C', 'G']);
        break;
      case 'G':
        pairArr.push(['G', 'C']);
        break;
    }
  };
  for(var i = 0; i < str.length; i++){
    find(str[i]);
  }
  return pairArr;
}

pairElement("GCG");
