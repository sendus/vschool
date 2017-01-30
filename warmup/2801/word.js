var text = "seaes";
var string = text.toLowerCase();
var isPali = true;
for (var i = 0, j = string.length-1; i < string.length,j >= 0 ; i++,j--) {
    if (string[i] != string[j]) {
                isPali = false;
            
        }
    }
console.log(isPali);

//another way
console.log(isPali);
function checkPalindrom(palindrom)
{
    var isPali = true;
    for( var i = palindrom.length-1, j = 0; i > 0; i--, j++ )
    {
        if( palindrom[i] != palindrom[j] )
        {
            isPali = false;
            break;
        }
    }
    console.log(isPali);
}
checkPalindrom('jacob');
checkPalindrom('racecar');
checkPalindrom('hannah');
//another way of full checking
function getLetters(str) {
    var strLetters = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            strLetters = strLetters + str[i].toLowerCase();
        }
    }
    return strLetters;
}

function palindrome(str) {
    var isPal = true;
    for (var i = 1; i < str.length / 2; i++) {
        if ((str[i - 1] != str[str.length - i])) {
            isPal = false;
        }
    }
    return isPal;
}

console.log(palindrome(getLetters("Star Rats!")));
console.log(palindrome(getLetters("palindrome")));
console.log(palindrome(getLetters("I madam, I made radio! So I dared! Am I mad?? Am I?!")));