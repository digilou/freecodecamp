/*********
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

    String.prototype.charCodeAt()

    String.fromCharCode()
*********/

function fearNotLetter(str) {
  var allChars = '';
  var absentChars = new RegExp('[^'+str+']', 'g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++){
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
    
  }
  
  if(allChars.match(absentChars)){
    return allChars.match(absentChars).join('');
  } else {
    return undefined;
  }
}

fearNotLetter("abce");
