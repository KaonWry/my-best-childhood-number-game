var prompt = require('prompt-sync')();
module.exports = function() {
   this.playNow = function (play, maximum, turns, input) {
      while (play < maximum) {
         //Even turn
         if (turns % 2 == 0) {
            input = prompt("Player 2 turn: ");
         }
         //Odd turn
         else {
            input = prompt("Player 1 turn: ");
         }
         //Check exit parameter
         if (input == "exit") {
            break;
         }
         else {
            input = parseInt(input);
         }
         //Failsafe if the input is invalid
         if (input < 1 || input > 4 || isNaN(input)) {
            continue;
         }
         play = play + input;
         console.log(play + "/" + maximum);
         turns++
      }
   }
}