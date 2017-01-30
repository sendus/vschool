//1
var a= 90;
var b= 80;
if (a>b) {
    console.log(a);
} else {
    console.log(b);
}
//2
for(var i=0; i<100; i++) {
  console.log(i);
}
//3
for(var i=0; i<=10 ;i++) {

  console.log(i + " * 2 = " + i * 2);
}
//4
for(var i=0; i<=100; i=i+2) {
  console.log(i);
}
//5
for(var i=0; i<=100; i+=2) {
  console.log(i);
}
//6
for(var i=0; i<10; i++) {
  for(var j=0; j<5; j++){
    console.log(j);
  }
  console.log(i);
}
//7
var arr = ["a", "b", 5, "d"];
console.log(arr);
//8
var arr = ["A", "B", "C", "D"];
for(var i=arr.length-1 ; i>=0; i--){
  console.log(arr[i]);
}
//9
var arr = ["A", "B", "C", "D", "E"];
var odd = [];
var even = [];
for(var i=0; i<arr.length; i++) {
  if(i % 2 == 0){
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
 }
console.log(even);
console.log(odd);
//10
function addition(a, b) {
  var sum = a+b;
  console.log(sum);
}
addition (5, 7);
//11
function sub(a, b) {
  console.log(a-b);
}
sub(5, 7);
//12
var mult = function(a, b) {
  console.log(a*b);
}
mult(7,5);
//13
var arr = ["A", "b", "C", "d", "E"];
for(i=0; i<arr.length; i++) {
  caps(arr[i]);
}
function caps(letter){
  if(letter === letter.toUpperCase()){
    console.log(letter);
  } else {
    console.log(letter.toUpperCase());
  }
}
//14
var string = "hWaREyOU";
var text = "";
for(i=0; i<string.length; i++){
  caps(string[i]);
}
console.log(text);
function caps(letter){
  if(letter === letter.toUpperCase()){
  //console.log(letter.toLowerCase());
    text = text + letter.toLowerCase();
  } else {
  //console.log(letter.toUpperCase());
    text = text + letter.toUpperCase();
  }
}
//15
