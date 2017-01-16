function rot13(str) {
  return str.split('').map.call(str, function(char) {
      c = char.charCodeAt(0);
      if (c < 65 || c > 90) {
        return String.fromCharCode(c);
      } else if (c < 78) {
        return String.fromCharCode(c + 13);
      }
      return String.fromCharCode(c - 13);
    }).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
