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

// this is to get colors for red peg answers
var colors = require('colors');

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
	for (let i = 0; solution.split('').length < 4; i++) {
		const randomIndex = getRandomInt(0, letters.length);
		if (!solution.split('').includes(letters[randomIndex]) ) {
			solution += letters[randomIndex];
		}
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function validInput(guessArray) {
  for (let i = 0; i < guessArray.length; i++) {
    if (!letters.includes(guessArray[i])) {
      return false;
    }
  }
  return true;
}

const guessesRemaining = () => {
  console.log(`You have ${10 - board.length} guesses remaining.`);
  return board.length < 10;
};

function generateHint(guessArray, solutionArray) {
	let redPeg = 0;
	let whitePeg = 0;
	for ( let i = 0; i < solutionArray.length; i++ ) {
		if ( guessArray[i] === solutionArray[i] ) {
			redPeg++;
			// remove the guess that has already been tested
			solutionArray[i] = null;
		}
	}
	// Loop through the updated array to find all correct letters
	// without adding more than one white peg for multiple correct letters
	for (let i = 0; i < solutionArray.length; i++) {
		let targetIndex = solutionArray.indexOf(guessArray[i]);
		if(targetIndex > -1){
			whitePeg++;
			// remove all guesses that match the current guess
			solutionArray[targetIndex] = null;
		}
  }
  guessesRemaining();
	console.log(colors.red(redPeg) + '-' + whitePeg);
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
			board.unshift(guess + ": " + generateHint(guessArray, solutionArray))
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