//function loadData() {
//    $.ajax({
//        url: "http://api.vschool.io/sendus/todo/",
//        type: "GET",
//        success: function (data) {
//            $(".added").html("");
//            for (var i = 0; i < data.length; i++) {
//                $(".added").append("<li id='" + data[i]._id + "'>" + data[i].title + "<button id='" + data[i]._id + "' class='submit'> delete </button></li>");
//            }
//        }
//    });
//}
//$(document).ready(function () {
//    loadData();
//    $("#get").click(function () {
//        addData();
//        loadData();
//    });
//});
//
//
//
//function addData() {
//    var title = $(".toAdd").val();
//    var data = {
//        title: title
//    };
//    $.ajax({
//        url: "http://api.vschool.io/sendus/todo/",
//        type: "POST",
//        data: data,
//        success: function () {
//            console.log("data has been added");
//            loadData();
//            $(".toAdd").val("");
//        }
//    });
//}
//
//
//function deletData() {
//    var id = $(this).attr("_id");
//    console.log(id);
//    //    var title = $(".toAdd").val();
//    //    var data = {
//    //        title: title
//    //    };
//    $.ajax({
//        url: "http://api.vschool.io/sendus/todo/" + id,
//        type: "DELETE",
//        success: function () {
//            loadData();
//            $(".toAdd").val("");
//        }
//    });
//}
var loadList = function() {
    $.ajax({
        url: "http://api.vschool.io/sendus/todo",
        type: "GET",
        success: function(data) {
            $("#list").html(" ");
            for(var i=0; i <data.length; i++) {
                var elem = "<div class = 'col-md-3'>"
                elem += "<p>" + data[i].title + "</p>";
                if(data[i].description) {
                    elem += "<p>" + data[i].description + "</p>";
                }
                if(data[i].price) {
                   elem += "<p>" + data[i].price + "</p>";
                }
               if(data[i].imgUrl) {
                   elem += "<p>" + data[i].imgUrl + "</p>";
                }
                if(data[i].completed) {
                    elem += "<p><input type='checkbox' checked/></p>";
                } else {
                    elem += "<p><input type='checkbox'/></p>";
                }
                elem += "<p>";
                elem += "<button onclick=deleteItem('" + data[i]._id + "')>Delete</buton>";
                elem += "</p>";
                elem += "</div>";
            } 
        }
    })
}
var addInfo = function() {
    var data = {
        title: $("#title").val(),
        description: $("#description").val(),
        price: $("#price").val(),
        imgUrl: $("#imgUrl").val(),
    }
    $.ajax({
        url: "http://api.vschool.io/sendus/todo",
        type: "POST",
        data: data,
        success: function() {
            loadList();
        }
    })
}
var deleteInfo(id) {
    $.ajax({
        url: "http://api.vschool.io/sendus/todo" + id,
        type: "DELETE",
        success: function() {
            loadList();
        }
    })
}
$("#get").click(function() {
    loadList();
})
$("#adding").click(function() {
    addInfo();
})