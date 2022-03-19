//Dependencies
var prompt = require('prompt-sync')();
require('./multiplayer.js')();
//The rules
console.log("This is a simple game.\nThe goal?\nReach a certain agreed number.\nHow?\nAll player starts at number one, each player add the number either 1, 2, 3, or 4 to the number before.\nThe winner is the player who reach the agreed number.\nThere can be only one winner.");
//Initialisation
var mason = 1;
var turn  = 1;
var playerTyped;
var maxMason = prompt("Type the highest number: ");
maxMason = parseInt(maxMason);
console.log(mason + "/" + maxMason);
single(mason, maxMason, turn, playerTyped);
//Winning condition
turn--
//Even turn
if (turn % 2 == 0) {
   console.log("Player 2 wins!");
}
//Odd turn
else {
   console.log("Player 1 wins!");
}