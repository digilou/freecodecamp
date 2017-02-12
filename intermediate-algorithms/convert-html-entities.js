/********
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

- RegExp
- HTML Entities
- String.prototype.replace()

********/

function convertHTML(str) {
  // create a list of HTML entities
  var htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':'&apos;'
  };
  // split string
  // find and replace symbols with HTML entities
  // return joined string
  return str.split('').map(function(value){
    return htmlEntities[value] || value;
  }).join('');
}

convertHTML("Dolce & Gabbana");
