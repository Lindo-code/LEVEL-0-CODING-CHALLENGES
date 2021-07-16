function vowels(word1) {
  word1 = word1.toLowerCase();
  x = word1.length;
  var vowels = "aeiou";
  var word = "";
  for (i = 0;i < x; i++ ){
    var character = word1[i]
    if (vowels.indexOf(character) >= 0)
    word += character + ", ";
  }
  var words = word.slice(0, -2);
  words = "Vowels: " + words;
  return words;
}

