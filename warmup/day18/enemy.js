function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
var Enemy = function(names) {
    var names = names ;
    this.enemyName = "";
    this.hitpoints = 0;
    this.defense =0;
    this.generate = function(){
    var index = getRandom(0, names.length -1);
    this.enemyName = names[index];  
    if (this.enemyName ==="Ancient Dragon") {
        var hit = getRandom(80,100) 
        this.hitpoints = hit;
        this.defense = hit * 3;
    } else if (this.enemyName ==="Prowler") {
        var hit = getRandom(50,79);
        this.hitpoints = hit;
        this.defense = hit * 3;
    } else {
        var hit = getRandom(20,49);
        this.hitpoints = hit
         this.defense = hit * 3;
    }
    
    } 
}
var possibleNames = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
for(var i=0; i<100; i++) {
    var tempEnemy = new Enemy(possibleNames);
    tempEnemy.generate();
    console.log(tempEnemy.enemyName);
    console.log(tempEnemy.hitpoints);
    console.log(tempEnemy.defense);
}
