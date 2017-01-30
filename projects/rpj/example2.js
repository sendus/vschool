var readlineSync = require("readline-sync");
var items = ["sword", "knife", "ninja star", "gun"];
var Player = function (name, health, attack, inv) {
   this.name = name;
   this.health = health;
   this.attack = attack;
   this.inv = inv;
   this.addItem = function (item) {
       this.inv.push(item);
   }
}
var Enemy = function (name, health, attack) {
   this.name = name;
   this.health = health;
   this.attack = attack;
}

function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("welcome to hell");
var playerName = readlineSync.question("Enter you player name: ");
var user = new Player(playerName, 100, 20, []);
var enemies = [];
enemies[0] = new Enemy("batman", 20, 100);
enemies[1] = new Enemy("scorpion", 400, 200);
enemies[2] = new Enemy("Goro", 200, 1000);
while (true) {
   var userinput = readlineSync.question("input w: ");
   if (userinput == "w") {
       chance = randomNumber(1, 100);
       if (chance > 50) {
           enemy = enemies[randomNumber(0, enemies.length - 1)];
           console.log("your are under attack " + enemy.name + " enemy");
           while (user.health > 0 && enemy.health > 0) {
               var userinput = readlineSync.question("input run or hit: ");
               if (userinput == "run") {
                   chance = randomNumber(1, 100);
                   if (chance > 50) {
                       console.log("u got away i will find u ");
                       break;
                   }
                   else {
                       console.log("you didnt get away");
                   }
               }
               else if (userinput == "hit") {
                   var damage = randomNumber(0, user.attack);
                   enemy.health -= damage;
                   console.log("You hit the " + enemy.name + " with " + damage + " amount of damage");
               }
               else {
                   console.log("unvalid input 'hit' or 'run: '");
               }
               chance = randomNumber(0, 100);
               if (chance > 50) {
                   console.log(enemy.name + " attacks");
                   var damage = randomNumber(0, enemy.attack);
                   user.health -= damage
                   console.log("You were hit for " + damage + " amount");
               }
               else {
                   console.log(enemy.name + " missed");
               }
           }
           if (enemy.health < 0 && user.health > 0) {
               console.log("You killed the " + enemy.name + " now have a prize");
               var item = items[randomNumber(0, items.length - 1)];
               console.log("You got a " + item);
               user.addItem(item);
           }
           else if (user.health < 0) {
               console.log("You died");
               break;
           }
       }
   }
   else {
       console.log("unvalid input 'w' FOR WALK");
   }
}
console.log("Game over your winings " + user.items.toString());