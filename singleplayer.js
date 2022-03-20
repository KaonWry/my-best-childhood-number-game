var prompt = require('prompt-sync')();

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function() {
   this.playNow = function (play, maximum, turns, input) {

      //Check first player
      var playFirst = getRandomInt(1, 2);
      if (playFirst == 1) {
         console.log("Bot playing first.")
      } 
      else {
         console.log("Player playing first.")
      }

      while (play < maximum) {
         //Bot plays first
         if (playFirst == 1) {
            //Even turn
            if (turns % 2 == 0) {
               input = prompt("Player turn: ");
            }
            //Odd turn
            else {
               input = getRandomInt(1, 4);
               console.log("Bot turn: " + input)
            }
         }

         //Human plays first
         else if (playFirst == 2) {
            //Even turn
            if (turns % 2 == 0) {
               input = getRandomInt(1, 4);
               console.log("Bot turn: " + input)
            }
            //Odd turn
            else {
               input = prompt("Player turn: ");
            }
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

      //Winning condition
      turns--

      //Bot plays first
      if (playFirst == 1) {
         //Even turn
         if (turns % 2 == 0) {
            console.log("Player wins!");
         }
         //Odd turn
         else {
            console.log("Bot wins!");
         }
      }

      //Human plays first
      if (playFirst == 2) {
         //Even turn
         if (turns % 2 == 0) {
            console.log("Bot wins!");
         }
         //Odd turn
         else {
            console.log("Player wins!");
         }
      }
   }
}