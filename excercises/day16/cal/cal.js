var readlineSync = require ( "readline-sync" );
var first = readlinesync.question ("Enter your first number");
console.log( "( " + first + " )" );
var second = readlinesync.question ("Enter your second number");
console.log( "( " + second + " )" );
var op = readlineSync.question ("Choose the operation writing add, sub, mul, or div");
console.log( " " + op + "" );

//right way to define a function
function calculation(operation) {
  if(operation == "add"){
    return first + second;
  } else if (operation == "sub"){
    return first - second;
  } else if (operation == "mul"){
    return first * second ;
  } else {
    return first/second ;
   }
}
calculation(op);