// !!!!!!! CODE BELOW WAS IN THE FILE WHEN I FORKED FROM ACA GITHUB!!!!!!!!

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here
  if (hand1 == hand2) {
    return("It's a tie!");
  } else if (hand1 == 'rock' && hand2 == 'scissors') {
    return("Hand one wins!");
  } else if (hand1 == 'paper' && hand2 == 'rock') {
    return("Hand one wins!");
  } else if (hand1 == 'scissors' && hand2 == 'paper') {
    return("Hand one wins!");
  } else {
    return("Hand two wins!");
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}



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

  // if (hand1 == hand2) {
  //   console.log("It's a tie!")
  // } else if (hand1 == "rock" && hand2 == "scissors") {
  //   console.log("hand1 wins!")
  // } else if (hand1 == "paper" && hand2 == "rock") {
  //   console.log("hand1 wins!")
  // } else if (hand1 == "scissors" && hand2 == "paper") {
  //   console.log("hand1 wins!")
  // } else {
  //   console.log("hand2 wins!")
  // }

