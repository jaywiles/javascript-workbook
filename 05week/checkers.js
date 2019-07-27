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
    this.board.grid[whichPiece[0]][whichPiece[1]] = null;
    this.board.grid[toWhere[0]][toWhere[1]] = playerTurn;

    // const jumpMove = (whichPiece, toWhere) => {
    // // TODO: NEED TO FIGURE OUT HOW TO TARGET PLAYER IN NEXT LINE!!!
    //   if (playerTurn == blackChecker) {
    //     // if move is trying to go 18 or 22 spaces on the grid...
    //     if ((whichPiece - toWhere) === (18 || -18 || 22 || -22)) {
    //       // if space where checker is going is null...
    //       if ([toWhere[0]][toWhere[1]] == null) {
    //         // ! need to figure out how to target other player in this line... because right now one player can skip their own piece !
    //         // ! does using this.player two lines down work if we're saying that piece is not null and not the same as one being played? !
    //         // if half of the space - aka the one being skipped over entered is NOT null... aka the space is filled...
    //         if (((whichPiece - toWhere)/2) !== null) {
    //           this.board.grid = null;
    //         }
    //       }
    //     } 
    //   } else {
    //     console.log('That is not a valid jump move.')
    //     return false;
    //   }
    // }
    // jumpMove();

    const jumpChecker = () => {
      // distance in the array of all spaces for a jump move is either 18 or 22 spaces
      if (whichPiece - toWhere === (18 || -18 || 22 || -22)) {
        // if the coordinates in toWhere are empty...
        if ([toWhere[0]][toWhere[1]] == null) {
          // if space in between -- so either half of 18 which is 9 or half of 22 which is 11 -- don't equal the player who's going or null...
          if (((whichPiece - toWhere)/2) !== playerTurn && null) {
            // defining variable for piece in the middle to remove
            let removedPiece = ((whichPiece - toWhere)/2);
            // splitting that variable so it's attainable
            let killPiece = removedPiece.split('');
            // if piece that's being killed do not equal player that's going or null
            if (([killPiece[0]][killPiece[1]]) !== playerTurn && null) {
              killPiece = null;
            }
          }
        }
      }
    }

    jumpChecker();
    switchPlayer();
  }
}
// count pieces function

function getPrompt() {
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




// const jumpMove = (whichPiece, toWhere) => {
//   // TODO: NEED TO FIGURE OUT HOW TO TARGET PLAYER IN NEXT LINE!!!
//   if (playerTurn == blackChecker) {
//     // if move is trying to go 18 or 22 spaces on the grid...
//     if ((whichPiece - toWhere) === (18 || -18 || 22 || -22)) {
//       // if space where checker is going is null...
//       if (toWhere == null) {
//         // ! need to figure out how to target other player in this line... because right now one player can skip their own piece !
//         // ! does using this.player two lines down work if we're saying that piece is not null and not the same as one being played? !
//         // if half of the space - aka the one being skipped over entered is NOT null... aka the space is filled...
//         if (((whichPiece - toWhere)/2) !== null) {
//           this.board.grid = null;
//         }
//       }
//     } 
//   } else {
//     console.log('That is not a valid jump move.')
//     return false;
//   }
// }
// // return jumpMove();




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



    // isValidInput(whichPiece, toWhere) {
    //   // defines valid row and column values
    //   const validRows = ['0', '1', '2', '3', '4', '5', '6', '7'];
    //   const validEvenColumns = ['0', '2', '4', '6'];
    //   const validOddColumns = ['1', '3', '5', '7'];
  
    //   // splits the checker positions into an array
    //   const pieceArr = whichPiece.split('');
    //   const endArr = toWhere.split('');
  
    //   // make sure both inputs are two characters long
    //   if ()
  
  
    // }
  


    // let start = whichPiece.split('');
    // let end = toWhere.split('');
    // let startX = start[0];
    // let 






    // isValidInput(whichPiece, toWhere) {
//   let start = whichPiece.split('');
//   let end = toWhere.split('');
//   let startX = start[0];
//   let startY = start[1];
//   let endX = end[0];
//   let endY = end[1];

//   // integrate above into below

//   const is0to7 = num => {
//     if (num.x <= 7 && num.x >= 0) {
//       return true;
//     };
//     if (num.y <= 7 && num.y >= 0) {
//       return true;
//     };
//   }
//   const isInputOdd = coords => {
//     if ((coords.x + coords.y) %2 !== 0) {
//       return true;
//     };
//   }
//   const isEmpty = endCoords => {
//     if (this.board.grid[endCoords.x][endCoords.y] === null) {
//       return true;
//     };
//   }
//   return is0to7 && isInputOdd(whichPiece) && isInputOdd(toWhere) && isEmpty(whichPiece) && !isEmpty(toWhere);
// }

// moveChecker() {
//   singleMove(whichPiece, toWhere) {
//     if (whichPiece > toWhere) {
      
//       return (end.x-start.x === -1) // or +1 depending on which color's turn it is
//       && (end.y-start.y === 1 || -1) // move left and right

//     }
//   }
//   jumpMove(whichPiece, toWhere) {

//     // inside if statement?
//     // change return from singleMove to 2 and -2
//     // if statement inside of if statement to determine whether second jump can be made... OR!!! would for loop work better??



//   }
// }


// // where do i put this...?????
// isJumpValid(start, end) {
//   if(validInput) {
//     if(this.player === one of them) {
//       if (end.x < start.x) {
//         this.board.grid[start.x - 1][start.y - 1] && this.board.grid[end.x - 1][end.y - 1];
//       }
//     }
//   }
// }



// }

// isValidMove:
// ending position needs to be empty
// odd vs even changes -- also must move forward until kinged
// column must go up/down by one depending on color and column has to go up or down one

// jumpPiece:
// for jumping, take number as a whole - magic number you're looking for is: one jump: 11, -11, 9, -9 // two jumps: -22, 22, -18, 18 after taking number as a whole

// isAWin:
// other player has no



  // // where do i put this...?????
  // isJumpValid(start, end) {
  //   if(validInput) {
  //     if(this.player === one of them) {
  //       if (end.x < start.x) {
  //         this.board.grid[start.x - 1][start.y - 1] && this.board.grid[end.x - 1][end.y - 1];
  //       }
  //     }
  //   }
  // }



  // this.board.grid[from[0][from[1]] null]
  // same with to but equal playerTUrn


  // // ! ONLY ONE OF THE FOLLOWING TWO MAIN IF STATEMENTS ARE GOING TO WORK !
    // // ! need to figure out how to target players !
    // // targets black checkers which are at bottom of board to start
    // if (playerTurn == blackChecker) {
    //   if (whichPiece > toWhere) {
    //     // if ending X-axis position is going to be greater & ending Y position moves it left or right one, return true
    //     if (((endX - startX) === -1) && ((endY - startY) === (1 || -1))) {
    //       if (playerTurn == 'black') {
    //         return true;
    //       }        
          
    //     }
    //     // need else if to target kinged pieces
    //   }
    // }
    // // targets white checkers which are at top of board to start
    // if (playerTurn == whiteChecker) {
    //   if (whichPiece < toWhere) {
    //     // if ending X-axis position is going to be less than & ending Y position moves it left or right by one, return true
    //     if (((endX - startX === 1) && (endY - startY) === (1 || -1))) {
    //       return true;
    //     }
    //   }
    // }