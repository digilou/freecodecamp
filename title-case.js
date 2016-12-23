function titleCase(str) {
  // split str into array after making all into lowercase
  str = str.toLowerCase().split(' ');
  
  // cycle through each array item
  for(var i = 0; i < str.length; i++){
    
    /* find first character and change to uppercase
       Make a copy */
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  // join words back into sentence and return
  return str.join(' ');
}

titleCase("I'm a little tea pot");
