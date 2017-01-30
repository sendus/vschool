//document.getElementById("g").addEventListener("input", function (){
//   var amount = document.getElementById("g").value;
//   var worth = 5;
//    document.getElementById("rg").value = amount * worth;
//    total();
//    
//});
//
//document.getElementById("bob").addEventListener("input", function (){
//   var amount = document.getElementById("bob").value;
//   var worth = 7;
//    document.getElementById("rbob").value = amount * worth;
//    total();
//    
//});
//document.getElementById("che").addEventListener("input", function (){
//   var amount = document.getElementById("che").value;
//   var worth = 11;
//    document.getElementById("rche").value = amount * worth;
//    total();
//    
//});
//function total(){
//      var amount1 = document.getElementById("rg").value;
//      var amount2 = document.getElementById("rbob").value;
//      var amount3 = document.getElementById("rche").value;
//document.getElementById("rt").innerHTML = Number(amount1) + Number(amount2) + Number(amount3);
//}
var count = 0, nb1=0, nb2=0, nb3=0;
totalCoins();
$("#goofy").click(function(){
                
    count++;
    $("#goofyresult").val(count);
    $("#rg").val(count*5);
    totalCoins();
    });

$("#cli1").click(function(){
                
    count++;
    $("#bob").val(count);
    $("#rbob").val(count*7);
    totalCoins();
    });

$("#cli").click(function(){
                
    count++;
    $("#che").val(count);
    $("#rche").val(count*11);
    totalCoins();
    });
function totalCoins(){
    nb1= parseInt($("#rg").val());
    console.log("1"+nb1);
    nb2= parseInt($("#rche").val());
     console.log("2"+nb2);
    nb3= parseInt($("#rbob").val());
    console.log("3"+nb3);
    console.log(nb1+nb2+nb3);
    $("#rt").html(nb1+nb2+nb3);
 }


