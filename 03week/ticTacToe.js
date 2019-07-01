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
  if ((board[0][0] == 'X') && (board[0][1] == 'X') && (board[0][2] == 'X')){
    return true
  } else if ((board[1][0] =='X') && (board[1][1] == 'X') && (board[1][2] == 'X')){
    return true
  } else if ((board[2][0] == 'X') && (board[2][1] == 'X') && (board[2][2] == 'X')){
    return true
  } else if ((board[0][0] == 'O') && (board[0][1] == 'O') && (board[0][2] == 'O')){
    return true
  } else if ((board[1][0] =='O') && (board[1][1] == 'O') && (board[1][2] == 'O')){
    return true
  } else if ((board[2][0] == 'O') && (board[2][1] == 'O') && (board[2][2] == 'O')){
    return true
  } else {
    return false
  }
}

function verticalWin() {
  if ((board[0][0] == 'X') && (board[1][0] == 'X') && (board[2][0] == 'X')){
    return true
  } else if ((board[0][1] =='X') && (board[1][1] == 'X') && (board[2][1] == 'X')){
    return true
  } else if ((board[0][2] == 'X') && (board[1][2] == 'X') && (board[2][2] == 'X')){
    return true
  } else if ((board[0][0] == 'O') && (board[1][0] == 'O') && (board[2][0] == 'O')){
    return true
  } else if ((board[0][1] =='O') && (board[1][1] == 'O') && (board[2][1] == 'O')){
    return true
  } else if ((board[0][2] == 'O') && (board[1][2] == 'O') && (board[2][2] == 'O')){
    return true
  } else {
    return false
  }
}

function diagonalWin() {
  if ((board[0][0] == 'X') && (board[1][1] == 'X') && (board[2][2] == 'X')){
    return true
  } else if ((board[0][2] =='X') && (board[1][1] == 'X') && (board[2][0] == 'X')){
    return true
  } else if ((board[0][0] == 'O') && (board[1][1] == 'O') && (board[2][2] == 'O')){
    return true
  } else if ((board[0][2] =='O') && (board[1][1] == 'O') && (board[2][0] == 'O')){
    return true
  } else {
    return false
  }
}

const switchPlayer = () => {
  if (playerTurn == 'X') {
    playerTurn = 'O'
  } else {
    playerTurn = 'X'
  }
}

function checkForWin() {
  // if horizontal win is met or others are met, then it's a win
  if (horizontalWin()) {
    console.log('Game over! ' + playerTurn + ' wins!');
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
  } else if (verticalWin()) {
    console.log('Game over! ' + playerTurn + ' wins!');
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
  } else if (diagonalWin()) {
    console.log('Game over! ' + playerTurn + ' wins!')
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
  // } else {
  //   switchPlayer();
  }
}

// TODO: define validMove
// TODO: define is it empty?
// TODO: define is it a winner?
// TODO: define how to switch players

const validInput = (row, column) => {
  if ((row >=0 && row <= 2) && (column >=0 && column <=2)) {
    return true;
  }
}

const validMove = (row, column) => {
  if (board[row][column] === ' ') {
    return true;
  }
}

function ticTacToe(row, column) {
  if (validInput(row, column)) {
    if (validMove(row, column)) {
      board[row][column] = playerTurn;
      checkForWin();
      switchPlayer();
    } else {
      console.log('Please choose an open space.')
    }
  }
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
