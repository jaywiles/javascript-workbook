'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let newStacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // pulls letter from end of the stack I'm pulling from and assigns it to variable
  let fromLetter = stacks[startStack].pop();
  // using variable, this pushes same letter to endStack (destination stack)
  stacks[endStack].push(fromLetter);
}

function isLegal(startStack, endStack) {
  // call the value of the last element of the array.. -1 because arrays automatically start at an index of 0
  let startIndex = stacks[startStack].length -1;
  let endIndex = stacks[endStack].length -1;
  // stacks calls the object.. startStack and endStack call the entire array.. and use startIndex and endIndex above to pass in value
  if ((stacks[startStack][startIndex] < stacks[endStack][endIndex]) || stacks[endStack].length === 0) {
    movePiece(startStack, endStack);
    return true
  } else {
    console.log('That move is not allowed.')
    return false
  }
}

function checkForWin() {
  // the next two lines do the exact same thing.. but are exactly the opposite
  // the first checks to see if a and c are empty.. the second checks to see if all four are in b
  if (stacks.a.length === 0 && stacks.c.length === 0) {
  // if (stacks.b.length === 4) {
    console.log("Winner, winner! Chicken dinner!")
    return true
  } else {
    return false
  }
}

function clearGame() {
  if (checkForWin() == true) {
    stacks = newStacks;
  }
}

function towersOfHanoi(startStack, endStack) {
  // isLegal contains the movePiece() function
  isLegal(startStack, endStack);
  // clearGame contains the checkForWin() function
  clearGame();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
