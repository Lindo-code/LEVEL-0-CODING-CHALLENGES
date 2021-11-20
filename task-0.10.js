function findSimilar (str1, str2) {
  str1 = str1.toLowerCase(); str2 = str2.toLowerCase();
  let similarLetters = ''; let search =""; let compare = "";
  if(str1.length > str2.length) {
    search = str1; compare = str2;
  } else {
    search = str2; compare = str1;
  }
  for(let i = 0; i < search.length; i++) {
    if(compare.indexOf(search[i]) >= 0) {
      if(search[i] === " " || similarLetters.indexOf(search[i]) >= 0) {
        continue;
      }
      similarLetters += `${search[i]}, `;
    };
  }
  similarLetters = similarLetters.slice(0,-2); 
  similarLetters = `Common characters: ${similarLetters}`;
  console.log(similarLetters);
}

findSimilar("House", "Computers");

