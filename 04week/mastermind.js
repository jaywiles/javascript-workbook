'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function validInput(guess) {
//   for (i = 0; i <= guessArray.length; i++) {
//     if 
//     letters.includes(guess[i])
//   }
//   return false;
// }

function validInput(guessArray) {
  for (let i = 0; i < guessArray.length; i++) {
    if (!letters.includes(guessArray[i])) {
      return false;
    }
  }
  return true;
}

function generateHint(guessArray, solutionArray) {
	let redPeg = 0;
	let whitePeg = 0;
	for (let i = 0; i < guessArray.length; i++) {
		if (guessArray[i] === solutionArray[i]) {
			redPeg++;
		} else if (guessArray[i].includes(solutionArray)) {
			whitePeg++;
		}
	}
	console.log(redPeg + '-' + whitePeg);
	return redPeg + '-' + whitePeg;
}

function mastermind(guess) {
  // console.log( "Solution: " + solution + "\n" + "Guess: " + guess )
  // solution = generateSolution();
  solution = 'abcd';
  // splits each character in guess so each can be checked
  const guessArray = guess.split('');
  // splits each character in solution so each can be checked
  const solutionArray = solution.split('');
  
  if (guessArray.length <= 4) {
		if (guess === solution) {
			console.log('You guessed it!');
			return 'You guessed it!'; 
		} else if (validInput(guessArray)) {
			board.unshift(guess + " " + generateHint(guessArray, solutionArray))
		} else {
			console.log('You must enter a letter between "a" and "h".');
		}
	} else {
		console.log('Too many letters');
	}
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}





// function generateHint(guess) {
//   // starting the count for each of these so they can be logged below
//   let correctLetterLocations = 0;
//   let correctLetters = 0;
//   // this function counts the number of characters that are also in the solution, and counts the number that are in the right place
//   guessArray.forEach((letter, index) => {
//     const correspondingLetter = solutionArray[index];
//     if (letter == correspondingLetter) {
//       correctLetterLocations++;
//     } else if (solutionArray.includes(letter)) {
//       correctLetters++;
//     }
//   });
//   console.log(`You have ${correctLetters} correct characters, but only ${correctLetterLocations} are in the right spot.`);
//   return correctLetterLocations + ' ' + correctLetters;
// }

// compare each letter
// if right character and right spot, red peg || if not, white peg





// take guess, which is a string, and parse it into an array
// function validInput(guessArray) {
//   let isValid = true; // usually set to true at first and then false when checking - easier to check when false
//   if (!guessArray.includes(letters)) {
//   isValid = false
//   }
// }

// validInput() - new function
// comparing guessArray to solution
// if we have for loop of i.. if guessArray.charAt[i] is equal to solution.charAt[i]
// will also need .indexAr





// const isValidInput = () => {
//   if (guess.includes(letters)) {
//     mastermind();
//   } else {
//     console.log('Please input a letter from "a" to "h".')
//   }
// }



  // if (letters.join().includes(guess.join())) {
  //   return false;
  // }
  // console.log('Is this working?')
  // return true
