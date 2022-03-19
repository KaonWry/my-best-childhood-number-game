//NPM dependencies
var prompt = require('prompt-sync')();
//The rules
console.log("This is a simple game.\nThe goal?\nReach a certain agreed number.\nHow?\nAll player starts at number one, each player add the number either 1, 2, or 3 to the number before.\nThe winner is the player who reach the agreed number.\nThere can be only one winner.");
//Initialisation
var mason = 1;
var turn  = 1;
var input;
var maxMason = prompt("Type the highest number: ");
console.log(mason);
while (mason < maxMason) {
   //Even turn
   if (turn % 2 == 0) {
      input = prompt("Player 2 turn: ");
   }
   //Odd turn
   else {
      input = prompt("Player 1 turn: ");
   }
   //Exit parameter
   if (input == "exit") {
      break;
   }
   else {
      input = parseInt(input);
   }
   //Failsafe if the input is invalid
   if (input < 1 || input > 3 || isNaN(input)) {
      continue;
   }
   mason = mason + input;
   console.log(mason);
   turn++
}
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