// ! STATUS UPDATE !
// TODO: 1. Need to figure out how to count checkers on board
// TODO: 2. How to make kings work... how they move and jump
// TODO: 3. I keep returning true... what else should I be doing??
// TODO: 4. I need a function to switch players...
// TODO: 5. My jumpMove function is only for one jump, not multiple...
// TODO: 6. How to make my this.moveChecker (start, end) work in my Game class... is that even what it's supposed to look like?

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
       this.symbol = '●',
       this.name = 'white'
     } else {
       this.symbol = '○',
       this.name = 'black'
     }
  }
}

const whiteChecker = new Checker('white')
const blackChecker = new Checker('black')

let playerTurn = blackChecker;

class Board {
  constructor() {
    this.grid = [],
    this.checkers = [],
    this.createCheckers = [],
    this.selectChecker = []
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
          // no clue why i had to hard code row 6 in on line below
          if ((c % 2 !== 0) && (r == 6)) {
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

const switchPlayer = () => {
  if (playerTurn == blackChecker) {
    playerTurn = whiteChecker;
  } else {
    playerTurn = blackChecker;
  }
}

class Game {
  constructor() {
    this.board = new Board
  }
  start() {
    this.board.createGrid();
    this.board.placePieces();
  }

  // isValidInput(whichPiece, toWhere) {
    // let start = whichPiece.split('');
    // let end = toWhere.split('');
    // let startX = start[0];
    // let startY = start[1];
    // let endX = end[0];
    // let endY = end[1];

  //   const is0to7 = () => {
  //     if (((startX || endX || startY || endY) <=7) && ((startX || endX || startY || endY) >= 0)) {
  //       console.log('first test working');
  //       return true;
  //     };
  //   }
  //   const isInputOdd = () => {
  //     if ((startX + startY) && (endX + endY) %2 !== 0) {
  //       console.log('second test working');
  //       return true;
  //     };
  //   }
  //   const isEmpty = () => {
  //     if (this.board.grid[endX][endY] === null) {
  //       console.log('third test working');
  //       return true;
  //     };
  //   }
  //   // put in comparing numbers of whichPiece and toWhere
  //   const findRightPlayer = () => {
  //     // if piece being grabbed if black...
  //     if (playerTurn === blackChecker) {
  //       if (whichPiece > toWhere) {
  //         // if ending X-axis position is going to be greater & ending Y position moves it left or right one, return true
  //         if (((endX - startX) === 1) && ((endY - startY) === (1 || -1))) {
  //           console.log('fourth test working for black')
  //           return true;
  //         }
  //         // need else if to target kinged pieces
  //       }
  //     // if piece being grabbed is white...
  //     } else if (playerTurn === whiteChecker) {
  //       if (whichPiece < toWhere) {
  //         // if ending X-axis position is going to be less than & ending Y position moves it left or right by one, return true
  //         if (((endX - startX === -1) && (endY - startY) === (1 || -1))) {
  //           console.log('fourth test working for white');
  //           return true;
  //         }
  //       }
  //     }
  //   }
  //   return is0to7() 
  //   && isInputOdd(whichPiece) 
  //   && isInputOdd(toWhere) 
  //   && isEmpty(whichPiece) 
  //   && !isEmpty(toWhere) 
  //   && findRightPlayer(whichPiece)
  //   && findRightPlayer(toWhere);
  // }

  moveChecker(whichPiece, toWhere) {
    // isValidInput();
    // if (whichPiece - toWhere == 7 || -7 || 9 || -9) {

    const singleMove = () => {
      // if it's black's turn...
      if (playerTurn == blackChecker) {
        // if piece is trying to move up one row (one row lower numerically)...
        if ([whichPiece[0]] - 1 == [toWhere[0]]) {
          // if piece is either moving left or right one space...
          if (([whichPiece[1]] - 1 == [toWhere[1]]) || ([toWhere[1]] - 1 == [whichPiece[1]])) {
            // ! need if statement to test if space is empty... !
            // if (toWhere !== (whiteChecker || blackChecker)) {
              // set space that piece was in to null...
              this.board.grid[whichPiece[0]][whichPiece[1]] = null;
              // ... and make space piece is moving to equal to the player that's moving it
              this.board.grid[toWhere[0]][toWhere[1]] = playerTurn;
              switchPlayer();
            // }
          }
        }
        // if it's white's turn
      } else if (playerTurn == whiteChecker) {
        // if piece is trying to move down one row (one row up numerically)...
        // ! line above and line below are the only ones that are different from black... !
        if ([toWhere[0]] - 1 == [whichPiece[0]]) {
          if (([whichPiece[1]] - 1 == [toWhere[1]]) || ([toWhere[1]] - 1 == [whichPiece[1]])) {
            this.board.grid[whichPiece[0]][whichPiece[1]] = null;
            this.board.grid[toWhere[0]][toWhere[1]] = playerTurn;
            switchPlayer();
          }
        }
      }
    }

    const jumpChecker = () => {
      // if it's black's turn...
      if (playerTurn == blackChecker) {
        // if piece is trying to move up two rows (down two numerically)...
        if ([whichPiece[0]] - 2 == [toWhere[0]]) {
          // if piece is trying to move left two columns (down two numerically)... (else statement farther down)...
          if ([whichPiece[1]] - 2 == [toWhere[1]]) {
            // if space in between is NOT null or same player...
            // if (([whichPiece[0]] - 1) && ([whichPiece[1]] - 1) !== whiteChecker) {
            // if ((([whichPiece[0]] - 1 == [toWhere[0]]) && ([(whichPiece[1] - 1 == toWhere[1])])) === whiteChecker) {
              // ! need variable targeting piece in between... !
              // this is trying to add starting and ending points and divide by two to get space in between
              let jumpedPiece = (([whichPiece] - (-[toWhere]))/2);
              // ! using variable for targeting space in between, set it to null !
              // this one is trying to grab jumpedPiece and reassign value
              this.board.grid[jumpedPiece] = null;
              this.board.grid[whichPiece[0]][whichPiece[1]] = null;
              this.board.grid[toWhere[0]][toWhere[1]] = playerTurn;
              switchPlayer();
            // }
          // TODO: do same thing but for jumping to the right
          // if piece is trying to move right two columns (up two numerically)...
          } else if ([toWhere[1]] - 2 == [whichPiece[1]]) {
            // if space in between is NOT null or same player...
            if (([whichPiece[0]] - 1) && ([whichPiece[1]] - 1) !== whiteChecker) {
            // if ((([toWhere[0]] - 1 == [whichPiece[0]]) && ([(toWhere[1] - 1 == whichPiece[1])])) === whiteChecker) {
              this.board.grid[whichPiece[0]][whichPiece[1]] = null;
              this.board.grid[toWhere[0]][toWhere[1]] = playerTurn;
              switchPlayer();
            }
          }
        }
      } else if (playerTurn == whiteChecker) {
        // TODO: do same thing but for white checkers...
      }
    }

    singleMove();
    jumpChecker();
    // switchPlayer();
  }
}

// TODO: count pieces function

function getPrompt() {
  // creates blank line in between plays
  console.log('')
  // tells which player's turn it is
  if (playerTurn == blackChecker) {
    console.log("It's black's turn.")
  } else if (playerTurn == whiteChecker) {
    console.log("It's white's turn.")
  }
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      // game.isValidInput(whichPiece, toWhere);
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


