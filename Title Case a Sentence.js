function titleCase(str) {
str = str.toLowerCase()
  var strArray = str.split(" ");
  
  for(var i = 0, length = strArray.length; i < length; i++) {
    var word = strArray[i].split('');
    
    word[0] = word[0].toUpperCase();
    
    strArray[i] = word.join('');
  }
  
  str = strArray.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
