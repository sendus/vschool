
/*$("#square").on("click", function() {
  $("#square").change("background-color","red") ;
});*/
//$("#square").click(function(){
//    $("#square").css("background-color", "red");
//});
$("#square").mouseenter(function(){
    $("#square").css("background-color", "blue");
});
$("#square").dblclick(function(){
    $("#square").css("background-color", "green");
});
/*$("#p1").mouseenter(function(){
    alert("You entered p1!");
});*/
$("#square").mouseleave(function(){
    $("#square").css("background-color", "red");
});
$(window).scroll(function(){
    $("#square").css("background-color", "orange");
});

/*$("#square").bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta ) {
        $("#square").css("background-color", "orange");
    }
});*/