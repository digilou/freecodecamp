/*********
Translate the provided string to pig latin.

[Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin) takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Here are some helpful links:

    Array.prototype.indexOf()

    Array.prototype.push()

    Array.prototype.join()

    String.prototype.substr()

    String.prototype.split()
*******/

function translatePigLatin(str) {
  var regexp = new RegExp(/aeiou/, 'g');
  var pigLatin = '';
  if (str.indexOf(0) === regexp){
     pigLatin = str[0] + "way";
  } else{
    pigLatin = str[0] + "ay";
  }
  return pigLatin; // returns "cay" BUT needs to return string and "cay" on back instead
}

translatePigLatin("consonant");
