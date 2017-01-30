//var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz.,([{-_)]}";
//function getRandomInt(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//        var string_length = 8;
//        var ranarr = [];
//        for (var i=0; i<string_length; i++) {
//        var pass = getRandomInt(0, chars.length);
//        ranarr.push(pass);
//        }
//console.log(ranarr);
//function randomPassword(length) {
//    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
//    var pass = "";
//    for (var j = 0; j < length; j++) {
//        var i = Math.floor(Math.random() * chars.length);
//        pass += chars.charAt(i);
//    }
//    return pass;
//}
//
//function generate() {
//    myform.row_password.value = randomPassword(myform.length.value);
//}
//console.log(pass);
//function generatePassword() {
//    var length = 8,
//        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//        retVal = "";
//    for (var i = 0, n = charset.length; i < length; ++i) {
//        retVal += charset.charAt(Math.floor(Math.random() * n));
//        generatePassword();
//    }
//    return retVal;
//}
$("#btn").click(randowmPassword) 


function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randowmPassword(){
    var str="";
    var passwordLength =randNumber(8,16);
    
    for(var i=0; i<passwordLength; i++){
   str = str +  String.fromCharCode(randNumber(33,122));
}
   alert(str + "      the length of it : " + passwordLength);
}