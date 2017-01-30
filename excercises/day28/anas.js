//document.getElementById("get").addEventListener("click", function()  {
//    
//    var input=parseInt(document.getElementById("number").value);
//    
//    var xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function() {
//        if(xhr.readyState == 4 && xhr.status == 200) {
//            
//            var strData = xhr.responseText;
//            var data = JSON.parse(strData);
//             console.log(data);
//            console.log(data["objects"][0]["pokemon"][input]["name"]);
//         document.getElementById("text").innerHTML=data["objects"][0]["pokemon"][input]["name"];
//          
//        } else if(xhr.readyState ==4 && xhr.status != 200){
//            alert("erroe" + xhr.status);
//        }    
//    };
//xhr.open ("GET" ,"http://api.vschool.io:6543/pokemon.json" , true);
//    xhr.send();
//    });
$("#get").click(function() {
  $.ajax({
    url: "http://api.vschool.io:6543/pokemon.json",
    success: function(result) {
        console.log("enter");
        console.log(result);
      $("#text").html(result.name);
    }
  });
});