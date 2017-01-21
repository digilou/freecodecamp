/*************
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
***************/

function convertToRoman(num) {
  // create arrays for basic Roman Numerals and decimals
  var romanNum = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var decimalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  
  // break apart the digits
  num.splice('');
  
  // compare numbers using indexOf
  
  
  // rejoin the integers
  num.join('');
  // return conversion
  return num;
}

convertToRoman(36);
