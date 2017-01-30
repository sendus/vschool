//var text = "hello my name is sendus".toLowerCase();
//var count = 1;
//var arr =[];
//var objResult=[];
//for(var i=0; i<text.length; i++) {
//
//    //console.log(arr.indexOf(text[i]) +" iii")
//    for(var j=i+1; j<text.length; j++){
//       
//        if(text[i]==text[j] && arr.indexOf(text[i]) === -1 ){
//            count++;
//            
//        }
//         
//    } 
//       arr.push(text[i]);
//    if(count>1)
//         objResult.push({letter:text[i],occurance:count});
//    else
//      objResult.push({letter:text[i],occurance:1});
//    //console.log(text[i] + count);
//    count = 1;
//}
//
////console.log(objResult);
//for(var i=0; i<objResult.length; i++){
//  console.log(objResult[i].letter+" : "+objResult[i].occurance);  
//}
var text = "hello my name is sendus".toLowerCase();
var count = 1;
var arr =[];
var objResult=[];
for(var i=0; i<text.length; i++) {
   if(arr.indexOf(text[i]) === -1)
    {
    for(var j=i+1; j<text.length; j++){
        if(text[i]==text[j] ){
            count++;
        }
    }
        arr.push(text[i]);
        objResult.push({letter:text[i],occurance:count});
    }
    count = 1;
}

//console.log(objResult);
for(var i=0; i<objResult.length; i++){
  console.log(objResult[i].letter+" : "+objResult[i].occurance);  
}