const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});


class Game {
  constructor() {
    var player1 = new Player();
    var player2 = new Player();
    this.board = new Board();
    this.board.display();
  }
  startRound() {
    // player1 move
    // player2 move
    // evaluate Board
      // if board win, end game
      // else if board full, end Game
      // else nextRound
  }
}

class Board {
  constructor() {
    this.board = [[' ', '|', ' ', '|', ' '],
                  ['-', ' ', '-', ' ', '-'],
                  [' ', '|', ' ', '|', ' '],
                  ['-', ' ', '-', ' ', '-'],
                  [' ', '|', ' ', '|', ' ']];
  }
  display() {
    var result = this.board.reduce((output, line) => {
      var render = line.join('');
      return output + render + '\n';
    }, '');
    console.log(result);
  }
  evaluate() {
    var positions = [0, 2, 4];
    positions.forEach(row => {
      var counter = 0;
      positions.forEach(col => {
        this.board[row][col]
      })
    })
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }
  play(move, board) {
    // place move on board
  }
}

var game = new Game();
