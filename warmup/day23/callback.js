//var Car = function(type, model, color) {
//  this.carType = type;
//  this.carModel = model;
//  this.carColor = color;
//  this.start = function(caback, ) {
//    console.log("I turn the key on in the " + this.carType + " car");
//    oldCar.caback();
//  }
//  this.drive = function(speed) {
//    console.log("I am driving at " + speed + " kph" + " in the " + this.carColor + " " + this.carType + " car");
//  }
//  this.caback = function(calling) {
//    console.log("the " +this.carType + " has been started");
//  }
//}
//
//var oldCar = new Car("Fiat", 500, "white");
//oldCar.start();
//oldCar.drive(100);
//oldCar.caback();
               
var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function(callback,speed) {
    console.log("I turn the key on in the " + this.carType + " car");
    callback(speed);
  }
  this.drive = function(speed) {
    console.log("I am driving at " + speed + " kph" + " in the " + this.carColor + " " + this.carType + " car");
  }
}

var oldCar = new Car("Fiat", 500, "white");

oldCar.start(oldCar.drive,100);