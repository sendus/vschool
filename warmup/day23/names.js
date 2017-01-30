var namesArray = ["wael", "sameer", "sendus", "hiba", "Yasser", "rima", "moustafa", "haitham", "jacob", "jameel"];
var callBack = function(name){
        console.log("we are calling " + name);
    }
var dontCallBack = function(name){
        console.log("we are not going to call " +name);
}
    
var sendTextBack = function(name){
    console.log("we are going to send a message to " +name);
}
var iteration = function(names,call, dontCall, sendText){
        for(var i=0; i<names.length; i++) {
            for(var j=0; j<names[i].length; j++) {
                if(names[i][j] ==)
            if(names[i].length % 2 ===0){
                call(names[i]);
            } else if(names[i].length %2 !== 0){
                dontCall(names[i]);
//            } else if(names[i].toLowerCase==="a") {
//                sendText(names[i]);
            }
            }
         
        }
    }
iteration(namesArray, callBack, dontCallBack, sendTextBack);