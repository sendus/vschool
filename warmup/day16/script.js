function creatEvenArray(highestNumber){
    var result = [];
    for(var i= 1; i <= highestNumber; i++){
        if( i %2 == 0 ){
            result.push(i);
        }
    }
    return result;
}
var output = creatEvenArray(8);
console.log(output);

function addOdds(arr){
    for(var i=2 ; i<=arr.length; i++){
        if(i%2 ==0){
            arr.push(i+1);
        }
    }
    return arr;
}
var odds = addOdds(output);
console.log(odds);