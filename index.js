//NPM dependencies
var prompt = require('prompt-sync')();
//The rules
console.log("This is a simple game.\nThe goal?\nReach the number 100.\nHow?\nAll player starts at number one, each player add the number either 1, 2, or 3 to the number before.\nThe winner is the player who reach the number 100.\nThere can be only one winner.");
//Random integer algorithm, really useful to the game
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}