// write function to put pieces on board
// creation function called moveChecker that defines pieces can only move in one direction and diagonally (maybe start with if statements so if it's X's turn, only X can move and they can only move in one direction) -- does this need to be split up into two validMove functions maybe and then put moveChecker after that?
// function that allows AND forces player to jump opponent if it's possible, and taking out the piece that's jumped over
// need function to switch player
// write functions to declare kings at the other end of the board -- maybe use color to show if piece has become king?
// write function to check for win and console.log when one player captures all of other player's pieces

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker() {
  // Your code here
}

class Board {
  constructor() {
    this.grid = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  
  // Your code here
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}





// ' ', '○', ' ', '○', ' ', '○', ' ', '○',
// '○', ' ', '○', ' ', '○', ' ', '○', ' ',
// ' ', '○', ' ', '○', ' ', '○', ' ', '○',
// ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
// ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
// '●', ' ', '●', ' ', '●', ' ', '●', ' ',
// ' ', '●', ' ', '●', ' ', '●', ' ', '●',
// '●', ' ', '●', ' ', '●', ' ', '●', ' '


// ' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O',
// 'O', ' ', 'O', ' ', 'O', ' ', 'O', ' ',
// ' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O',
// ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
// ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
// 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ',
// ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X',
// 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' '
