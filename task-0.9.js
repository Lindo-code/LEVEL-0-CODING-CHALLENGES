function vowels(str) {
  str = str.toLowerCase();
  let vowels = "aeiou"; let vowelsFound = "";
  for (let i = 0; i < str.length; i++ ){
    if (vowels.indexOf(str[i]) >= 0){
      if (vowelsFound.indexOf(str[i]) >= 0) {
        continue;
      }
      vowelsFound += `${str[i]}, `;
    };
  }
  vowelsFound = vowelsFound.slice(0, -2);
  vowelsFound = `Vowels: ${vowelsFound}`;
  console.log(vowelsFound);
}
vowels("Umuzi");
