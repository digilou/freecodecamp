/***********
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Boolean Objects
***********/

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
