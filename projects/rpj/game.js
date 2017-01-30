var readlineSync = require("readline-sync");
var items = ["Flower", "Juice", "Sandwich", "Hat"];
var Player = function(name, healthPower, attack, inventory) {
  this.name = name;
  this.health = healthPower;
  this.attack = attack;
  this.inventory = inventory;
  this.addItem = function(item) {
  this.inventory.push(item);
  }
}
var Monster = function(name, health, attacking) {
    this.name = name;
    this.health = health;
    this.attacking = attacking;
}
function randomChance(min,max)
{
   return Math.floor(Math.random()*(max-min+1)+min);
}
console.log("Hello, this is my first game i create and I'm trying it on you. ");
var playerName = readlineSync.question(" please enter your name to continue the game: ");
var gamer = new Player(playerName, 100, 20, []);

var enemies = [];
enemies[0] = new Monster("Dog", 80, 100);
enemies[1] = new Monster("Cat", 100, 200);
enemies[2] = new Monster("Hippo", 65, 150);


while(true) {
    var starting = readlineSync.question("If you wanna start the game press W to walk ");
    if(starting=="w") {
       chance  = randomChance(1, 100);
        if(chance < 50) { 
            var monster = enemies[randomChance(0, enemies.length -1)];
            console.log(monster);
            console.log("your are under attack " + monster.name + " enemy");
            while(gamer.health >0 && monster.health>0) {
                var gamerinput = readlineSync.question("choose to attack or run by typing run or att ");
                if(gamerinput =="run") {
                 survivng =   randomChance(1, 100);
                    if(survivng >50) {
                        console.log("you succeeded running away ");
                        break;
                    } else {
                        console.log("the monster still behind you ");
                    } 
                }else if(gamerinput == "hit") {
                    hurt = randomChance(0, gamer.attack);
                        monster.health -= hurt;
                        console.log("you were hit by " + hurt + " u.")
                    } else {
                        console.log("invalid input");
                    }
                
                chance = randomChance(0, 100);
                if(chance >50) {
                    console.log(monster.name + " is attacking");
                hurt = randomChance(0, monster.attack);
                    gamer.health -= hurt;
                    console.log("you were hit by " + hurt + " u.")
                } else {
                    console.log(monster.name + " failed reaching you.");
                }
            }
            if(monster.health <0 && gamer.health >0) {
                console.log("you killed (" + monster.name + ") lets see what are you gnna win....");
                var item = items[randomChance(0, items.length-1)];
                console.log("you won " + item);
                gamer.addItem(item);
            } else if (gamer.health <0) {
                console.log("you failed.");
                break;
            }
        } else{
            console.log("continue playing by pressing w   ");
        }
    } else {
        console.log("invalid input, write w to continue.");
    }
}
console.log("Game Over you are done with " + gamer.items.toString());