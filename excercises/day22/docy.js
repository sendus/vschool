////var colorArray = ["red", "blue", "green", "purple"];
///*$("#color-button").click(function(){
//    $("#text").css("color", "red");
//});*/
///*var colorArray= ["red", "blue", "green"];
///*$("#text").click(function(){
//    
//})*/
///*$("#color-button").click(function(){
//    $*/
//   // var colors = ["red", "","",""];
///*function randNumber(min, max ) {
//   return Math.floor(Math.random() * (max - min +1))
//}
//function getColor() {
//    return colorArray[randNumber(0, colorArray.length -1)];
//    
//};
////for(var i =0; i <colorArray.length; i++) {
//  // console.log(getColor());
////}
//("#color-button").click(function(){
//    $("#text").css("color", getColor());
//}); */
///*function rand(min, max){
//    return Math.floor(Math.random())
//}
//var changeColor = function(){
//    var colors["red", "green", "blue"];
//}
//function randNumber(min, max) {
//  return Math.floor(Math.random() * (max - min + 1) + min);
//}*/
//
//function changeColor() {
//  var colors = ["#D81B60", "#827717", "#B388FF"];
//  var color = colors[randNumber(0,  colors.length - 1)];
//  $("#text").css("color", color);
//}
//
//$("#color-button").click(changeColor);
function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeColor() {
  var colors = ["#D81B60", "#827717", "#B388FF"];
  var color = colors[randNumber(0,  colors.length - 1)];
  $("#text").css("color", color);
}

$("#color-button").click(changeColor);