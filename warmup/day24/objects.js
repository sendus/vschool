var Table = function( color,size, height,width) {
    this.color = color;
    this.size = size;
    this.height =height;
    this.width = width;
    this.area =function() {
        console.log("area= " + (this.width * this.height));
    }
}
var tableOne = new Table("brown", "large", 50, 100);
tableOne.area();
var Monitor = function(size, brand ,color) {
    this.size = size;
   this.brand = brand;
    this.color = color;
//    this.area =function() {
//        console.log("area= " + (this.width * this.height));
//    }
}
var tableOne = new Table("large", "dell", black);
//tableOne.area();
