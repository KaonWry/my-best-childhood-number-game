//Dependencies
var prompt = require('prompt-sync')();


//The rules
console.log("This is a simple game.\nThe goal?\nReach a certain agreed number.\nHow?\nAll player starts at number one, each player add the number either 1, 2, 3, or 4 to the number before.\nThe winner is the player who reach the agreed number.\nThere can be only one winner.");
console.log("[1] Singleplayer (UNSTABLE)");
console.log("[2] Multiplayer");


//Gamemode
while (true) {
   var gamemode = prompt("Choose gamemode: ");
   gamemode = parseInt(gamemode);
   if (gamemode == 1) {
      require('./singleplayer.js')();
      break;
   }
   else if (gamemode == 2) {
      require('./multiplayer.js')();
      break;
   }
   else {
      continue;
   }
}


//Initialisation
var mason = 1;
var turn  = 1;
var playerTyped;
var maxMason = prompt("Type the highest number: ");
maxMason = parseInt(maxMason);
console.log(mason + "/" + maxMason);


//Game init
playNow(mason, maxMason, turn, playerTyped);