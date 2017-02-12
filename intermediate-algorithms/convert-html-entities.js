/********
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

- RegExp
- HTML Entities
- String.prototype.replace()

********/

function convertHTML(str) {
  var regExp = new RegExp(['&', '<', '>', '"', "'"], "g","i");
  switch(str){
    case '&':
      str = "&amp;";
      break;
  }
  // &amp; &lt; &gt; &dquo; &apo;
  return str;
}

convertHTML("Dolce & Gabbana");
