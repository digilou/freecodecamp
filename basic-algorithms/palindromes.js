function palindrome(str) {
  // Good luck!
  var regexp = /[\W_]/g;
  var lowerStr = str.toLowerCase().replace(regexp, '');
  var reverseStr = lowerStr.split('').reverse().join(''); 
  return reverseStr === lowerStr;
}



palindrome("eye");
