function countVowel(strVow) {
    var count =0;
    for (var i = 0; i<strVow.length; i++) {
        if (strVow[i] == "a" || strVow[i] == "o" || strVow[i] == "i" || strVow[i] == "u" || strVow[i] == "e") {
            count++;
        }
    }
    return count;
}
function countConst(strVow) {
    
      var count =0;
    for (var i = 0; i<strVow.length; i++) {
        if (strVow[i] != "a" && strVow[i] != "o" && strVow[i] != "i" && strVow[i] != "u" && strVow[i] != "e" ) {
            count++;
        }
    }
    return count;
}
    var text = "hello hi";
console.log(countVowel(text));
console.log(countConst(text));
//
