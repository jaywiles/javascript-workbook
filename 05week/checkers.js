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


class Checker {
  constructor(color) {
     if (color == 'white') {
       this.symbol = '○',
       this.name = 'white'
     } else {
       this.symbol = '●',
       this.name = 'black'
     }
  }
}

const whiteChecker = new Checker('white')
const blackChecker = new Checker('black')

class Board {
  constructor() {
    this.grid = [],
    this.checkers = [],
    this.createCheckers = []
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
          // line below changes pieces to [object Object]
          // rowOfCheckers.push(this.grid[row][column]);
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
  placePieces() {    
    for (let r = 0; r <= 8; r++) {
      if (r <= 2) {
        for (let c = 0; c < 8; c++) {
          // if column values are odd and row values are even
          if ((c %2 !== 0) && (r % 2 === 0)) {
            this.grid[r][c] = whiteChecker;
            this.checkers.push(this.whiteChecker);
          } else if ((c %2 == 0) && r %2 !== 0) {
            this.grid[r][c] = whiteChecker;
            this.checkers.push(this.whiteChecker);
          }
        }
      } else if (r >= 5) {
        for (let c = 0; c < 8; c++) {
          // if column values are odd and row values are even
          if ((c % 2 !== 0) && (r % 2 === 0)) {
            this.grid[r][c] = blackChecker;
            this.checkers.push(this.blackChecker);
          } else if ((c %2 == 0) && (r %2 !== 0)) {
            this.grid[r][c] = blackChecker;
            this.checkers.push(this.blackChecker);
          }
        }
      }
    }
  }

  
  



}

// isValidMove:
// ending position needs to be empty
// odd vs even changes -- also must move forward until kinged
// column must go up/down by one depending on color and column has to go up or down one

// jumpPiece:
// for jumping, take number as a whole - magic number you're looking for is: one jump: 11, -11, 9, -9 // two jumps: -22, 22, -18, 18 after taking number as a whole

// isAWin:
// other player has no

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.placePieces();
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





    // let whitePositions = [
    //   [0, 1], [0, 3], [0, 5], [0, 7],
    //   [1, 0], [1, 2], [1, 4], [1, 6],
    //   [2, 1], [2, 3], [2, 5], [2, 7]
    // ];
    // for (let i = 0; i < 12; i++) {
    //   let whiteRow = whitePositions[i][0]
    //   let whiteColumn = whitePositions[i][1]

    //   this.grid[whiteRow][whiteColumn] = whiteChecker;
    //   this.checkers.push(whiteChecker);
    // }

    // let blackPositions = [
    //   [5, 0], [5, 2], [5, 4], [5, 6],
    //   [6, 1], [6, 3], [6, 5], [6, 7],
    //   [7, 0], [7, 2], [7, 4], [7, 6]
    // ];
    // for (let i = 0; i < 12; i++) {
    //   let blackRow = blackPositions[i][0]
    //   let blackColumn = blackPositions[i][1]

    //   this.grid[blackRow][blackColumn] = blackChecker;
    //   this.checkers.push(blackChecker);
    // }
