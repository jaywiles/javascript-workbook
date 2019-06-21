'use strict';

// establish players

// input options are rock, paper, scissors

// if statements - if same, then tie... if not, declare who wins in each scenario
// 1. tie scenarios
// 2. R - S (R wins)
// 3. R - P (P wins)
// 4. S - R (R wins)
// 5. S - P (S wins)
// 6. P - R (P wins)
// 7. P - S (S wins)



if (player1 == player2) {
  console.log("It's a tie!")
} else if (player1 = "rock" && player2 = "scissors") {
  console.log("player1 wins!")
} else if (player1 = "paper" && player2 = "rock") {
  console.log("player1 wins!")
} else if (player1 = "scissors" && player2 = "paper") {
  console.log("player1 wins!")
} else () {
  console.log("player2 wins!")
}




































// !!!!!!! CODE BELOW WAS IN THE FILE WHEN I FORKED FROM ACA GITHUB!!!!!!!!

// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// function rockPaperScissors(hand1, hand2) {

//   // Write code here

// }

// function getPrompt() {
//   rl.question('hand1: ', (answer1) => {
//     rl.question('hand2: ', (answer2) => {
//       console.log( rockPaperScissors(answer1, answer2) );
//       getPrompt();
//     });
//   });
// }

// // Tests

// if (typeof describe === 'function') {

//   describe('#rockPaperScissors()', () => {
//     it('should detect a tie', () => {
//       assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
//       assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
//       assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
//     });
//     it('should detect which hand won', () => {
//       assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
//       assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
//     });
//     it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
//       assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
//       assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
//     });
//   });
// } else {

//   getPrompt();

// }
