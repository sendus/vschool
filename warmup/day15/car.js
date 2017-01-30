/*function Car(color, model, milesAttributes) {
    this.color = color;
    this.model = model;
    this.milesattributes = milesAttributes;
    this.run = function(){
        console.log("color " + this.color + "model" + this.model + "milesAttributes" + this.milesattributes)
    }
}   
var car1 = new Car("red" , "2005" , "300/h");*/


var array = [];
var Car = function(color, ,model, ,miles) {
    this.color = color;
    this.model = model;
    this.miles = miles;
    this.run = function()
    {
       console.log("color " + this.color + "model" + this.model + "miles" + this.miles + "isrunning");  
    }
};
array.push(new Car("red", "2005", "1000"));

array.push(new Car("black", "2010", "2000"));
array.push(new Car("blue", "2015", "3546"));
for(var i = 0; i<array.length; i++){
    array[i].run();
}