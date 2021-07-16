function vowels(word1) {
  word1 = word1.toLowerCase();
  x = word1.length;
  var vowels = "aeiou";
  var word = "";
  var letterDump = "";
  for (i = 0;i < x; i++ ){
    var character = word1[i]
    if (vowels.indexOf(character) >= 0){
      if (word.indexOf(character) >= 0){
        letterDump = character;
      } else {
        word += character + ", ";
      }
    }
  }
  var words = word.slice(0, -2);
  words = "Vowels: " + words;
  console.log(words);
}
