var readlineSync = require("readline-sync");

/*var food = readlineSync.question("what is youe favourite food");
console.log("you gavourite food is " + food );*/

var info = readlineSync.question("please enter any statment ");
console.log(info.toUpperCase());
var characters = readlineSync.question("enter a statments and i will count the characters: ");
console.log(characters.length);
var first = readlineSync.question("please anter a string: ");
var second = readlineSync.question("please enter another string: ");
console.log(first.concat(second));
var long = readlineSync.question("enter a long string: ");
console.log(long.substring)