function findSimilar (str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    var similar = '';
    if (str1.length > str2.length) {
        var search = str1;
        var compare = str2;
    } else {
        var search = str2;
        var compare = str1;
    }
    for (var i = 0; i < search.length; i++){
        var character = search[i];
        if (compare.indexOf(character) >= 0)
        {
            similar += character + ", ";
        };
    }
    similar = similar.slice(0,-2);
    similar = "Common letters: " + similar;
    return(similar);
}

