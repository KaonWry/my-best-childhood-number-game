var prompt = require('prompt-sync')();

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function() {
   this.playNow = function (play, maximum, turns, input) {
      //Check first player
      var playFirst = getRandomInt (1, 2);
      if (playFirst == 1) {
         playFirst = "bot"
         console.log("CPU playing first.")
      } 
      else {
         playFirst = "human"
         console.log("Player playing first.")
      }

      while (play < maximum) {
         //Bot plays first
         if (playFirst == "bot") {
            //Even turn
            if (turns % 2 == 0) {
               input = prompt("Player turn: ");
            }
            //Odd turn
            else {
               input = getRandomInt (1, 4);
            }
         }

         //Human plays first
         else if (playFirst == "human") {
            //Even turn
            if (turns % 2 == 0) {
               input = getRandomInt (1, 4);
            }
            //Odd turn
            else {
               input = prompt("Player turn: ");
            }
         }

         play = play + input;
         console.log(play + "/" + maximum);
         turns++
      }
   }
}