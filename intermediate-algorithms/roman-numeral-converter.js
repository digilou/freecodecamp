/*************
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
***************/

function convertToRoman(num) {
 var romanNum = ["I", "V", "X", "L", "C", "D", "M"],
     integerArr = [],
     romanNumArr = [],
     numeral = "";
  while (num) {
    integerArr.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i<integerArr.length; i++){
      units(integerArr[i]);
  }
  function units(){
    numeral = romanNum[i*2];
    switch(integerArr[i]) {
      case 1:
        romanNumArr.push(numeral);
        break;
      case 2:
        romanNumArr.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumArr.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumArr.push(numeral.concat(romanNum[(i*2)+1]));
        break;
      case 5:
        romanNumArr.push(romanNum[(i*2)+1]);
        break;
      case 6:
        romanNumArr.push(romanNum[(i*2)+1].concat(numeral));
        break;
      case 7:
        romanNumArr.push(romanNum[(i*2)+1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumArr.push(romanNum[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
        break;
      case 9:
        romanNumArr.push(romanNum[i*2].concat(romanNum[(i*2)+2]));
      }
    }
  return romanNumArr.reverse().join("").toString();
}

convertToRoman(36);

