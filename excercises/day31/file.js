var deleteItem = function(anoterId){
    $(anoterId).remove();
}
$("#add").click(function(){
    var another = $("#adding").val();
    $("#newItem").append("<li id=" + another + "><button id=" + another + " onclick=  'deleteItem(" + another + ")' > X </button>" + another + "</li>");
    $("#adding").val("");
});
//  $("#output").append("<li id=" + text + ">" + text + "<button id=" + text + " onclick='deleteItem(" + text + ")'>delete</button></li>");