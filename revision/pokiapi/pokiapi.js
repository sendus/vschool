var request = require("request");
request("http://pokeapi.co/api/v1/pokemon/", function(error, response, body) {
    if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        console.log(data["name"]);
        console.log(data["attack"]);
    } else {
        console.log(error);
        console.log(response.statusCode);
    }
})
