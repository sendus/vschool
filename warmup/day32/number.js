//
//var num = 827634825;
//var nims = num.toString();
//var final = [];
//for(var i=0; i<nims.length; i++) {
//    final.push(parseInt(nims[i]));
//}
//
//console.log(final);


//
//function convert(int) {
//    var temp = int.toString();
//    var arr = [];
//    for (var i = 0; i < temp.length; i++) {
//        arr.push(parseInt(temp[i]));
//    }
//    return arr;
//    for (var j = 0; j < arr.length; j++) {
//        var squaring = arr[j] * arr[j];
//        var two = [];
//        var summation = 0;
//        summation += squaring;
//        two.push(parseInt(summation));
//    }
//    return two;
//  }
//console.log(convert(19));
//

function changeIntIntoArrayOfInt(x){
    
    var y = x.toString();
    var arr=[];
     var sum = 0;
    
    for (var i=0 ; i< y.length ; i++){
        var temp = parseInt(y[i]);
        arr.push(temp);
       sum += (arr[i] * arr[i])
        
    }
    console.log(arr);
    console.log(sum);
    
    if( sum > 1 ){
        
        changeIntIntoArrayOfInt(sum)
        
    }else{
        
        console.log("happy number")
    }
    
}

changeIntIntoArrayOfInt(19);