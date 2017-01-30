//counter = 0;
//var ourInterval = setInterval(function() {
//  if(counter >= 10) {
//    clearInterval(ourInterval);
//  }
//  console.log("I have waited one second " + counter);
//  counter++;
//},1000);
//
//console.log("And going and going");




//$("#btn").click(function() {
//  var counter = -1;
//  var words = "Hello how are you".split(" ");
//  var repeat = setInterval(function() {
//    counter++;
//    if(counter >= words.length) {
//      clearInterval(repeat);
//    }
//    $("p").html(words[counter]);
//  }, 1000)
//});
//$("btn").click(function()) {
//               var counter = 0;
//               var countd = setInterval(function()) {
//    counter++;
//    if(counter >=5) {
//        clearInterval(countd);
//    }
//    
//}
//               }
//counter =20;
//var ourInterval = setInterval(function() {
//  if(counter ===0) {
//    clearInterval(ourInterval);
//  }
//  console.log("this is the end of the world " + counter);
//  counter--;
//},1000);

//console.log("And going and going");

//  $("#timer")
//  .countdown("2017/01/01", function(event) {
//    $(this).text(
//      event.strftime("%D days %H:%M:%S")
//    );
//  });
$("#start").click(function()) {
                 var timeInterval = setInterval(function() {
    var seconds = parseInt($("#seconds").val());
    var minutes = parseInt($("#minutes").val());
    var hours = parseInt($("#hours").val());
    seconds--;
    if(seconds===0 && minutes>0) {
        minutes--;
        seconds = 59;
    }
    else if (minutes===0 && hours>0) {
        hours--;
        minutes = 59;
    } else idf(seconds<=0 && minutes<=0 && hours<=0) {
        $("p").display("this is the end of the world");
        clearInterval(timeInterval);
    } else {
        $("#hours").val(hours);
        $("#minutes").val(minutes);
        $("#seconds").val(seconds);

    }
})
                 };