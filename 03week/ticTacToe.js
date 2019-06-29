'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  if (board[[0][0]] && board[[0][1]] && board[[0][2]] == 'X') {
    return 'X wins';
  } else if (board[[0][0]] && board[[0][1]] && board[[0][2]] == 'O') {
    return 'O wins';
  }
  // ! need to put all other options in here too! !
}

function verticalWin() {
  // Your code here
  if (board[[0][0]] && board[[1][0]] && board[[2][0]] == 'X') {
    return 'X wins';
  } else if (board[[0][0]] && board[[1][0]] && board[[2][0]] == 'O') {
    return 'O wins';
  }
  // ! need to put all other options in here too! !
}

function diagonalWin() {
  // Your code here
  if (board[[0][0]] && board[[1][1]] && board[[2][2]] === 'X') {
    return 'X wins';
  } else if (board[[0][0]] && board[[1][1]] && board[[2][2]] === 'O') {
    return 'O wins';
  }
  // ! need to put all other options in here too! !
}

function checkForWin() {
  // Your code here
  // if horizontal win is met or others are met, then it's a win
  if (horizontalWin == 'X wins' || horizontalWin == 'O wins') {
    window.alert('Game over!')
  } else if (verticalWin == 'X wins' || verticalWin == 'O wins') {
    window.alert('Game over!')
  } else if (diagonalWin == 'X wins' || diagonalWin == 'O wins') {
    window.alert('Game over!')
  } else {

  }
  // ! is that how to reference the various wins? !
  // ! do i need empty else function so that it will move on? !
}

// define validMove
// define is it empty?
// TODO: define is it a winner?
// TODO: define how to switch players

const validMove = (row, column) => {
  if ((row >=0 && row <= 2) || (column >=0 && column <=2)) {
    return true;
  }
}

const emptySpace = (row, column) => {
  // ! what needs to go inside brackets below..? !
  if (board[][] === ' ') {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here
  if (validMove ) {
    
  }

  // what we need in here:
  // isvalid (pick something else..?) if valid... then...
  // place on board... then...
  // check for wins... then...
  // switchplayer
  // 


  // if not valid move:
  // if (!board[1][1])
  // [board[1][1]=player1]

  // flipping between X and O
  // playerX = 'X'
  // playerO = 'O'
  // how do we keep track of switching players?
  // if current == playerX) {set current = playerO} else {current == playerX}
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}






// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
