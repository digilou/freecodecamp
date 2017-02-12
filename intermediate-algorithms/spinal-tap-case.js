/********
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

RegExp
String.prototype.replace()
********/

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Replace spaces and underscores with "-" and make everything lower case
  return str.replace(/\s+|_+/g, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
