/********
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

- String.prototype.charCodeAt()

- String.fromCharCode()
********/

function binaryAgent(str) {
  // split up string for evaluation
  var split = str.split(' ');
  // empty array for conversions
  var arr = [];
  // loop through all characters
  for(var i = 0; i < split.length; i++){
    // push converted characters (convert using parseInt)
    arr.push(String.fromCharCode(parseInt(split[i], 2)));
  }
  // return the array that has been rejoined as a string
  return arr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
