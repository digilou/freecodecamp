function palindrome(str) {
  // Good luck!
  var remove = /[\W_]/g;
  var lowerStr = str.toLowerCase().replace(remove, '');
  var reverseStr = lowerStr.split('').reverse().join(''); 
  return reverseStr === lowerStr;
}



palindrome("eye");
