var str=[];
function convertToBinary(x){
    for(var i=x ; i>=1 ; i=Math.floor(i/2)){
        if (i%2==0){
           str.unshift(0);
            }
        else if (i%2==1){
            str.unshift(1);
        }
    }
}
convertToBinary(5);
console.log(str);









//Binary
// solution one
function convertDecToBi(dec) {
  return (dec >>> 0).toString(2);
}

console.log(convertDecToBi(3));

//solution two
function convertDecToBi(dec) {
  var con = [];
  while(dec >= 1) {
    con.unshift(dec % 2);
    dec = Math.floor(dec / 2);
  }
  return con.join("");
}
console.log(convertDecToBi(3));

//Hex a decimal
//solution one
function convertDecToHex(dec) {
  var vals = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  var con = [];
  if(dec < 16) {
    return String(vals[dec]);
  }
  while(dec >= 1) {
    con.unshift(vals[dec % 16]);
    dec = Math.floor(dec / 16);
  }
  return "0x" + con.join("");
}
console.log(convertDecToHex(100));