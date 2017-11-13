// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//   rl.close();
// });


class Game {
  constructor() {
    var player1 = new Player('player1', 'O');
    var player2 = new Player('player2', 'X');
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
    this.board = [[' ', ' ', ' '],
                  [' ', ' ', ' '],
                  [' ', ' ', ' ']];
  }
  display() {
    var result = this.board.map(line => line.join('|'))
                           .join('\n- - -\n');
    console.log(result);
  }
  place(move, token) {
    if (this.board[move[0]][move[1]] === ' ') {
      this.board[move[0]][move[1]] = token;
    } else {
      console.log('INVALID MOVE!');
    }
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
  constructor(name, token) {
    this.name = name;
    this.token = token;
  }
  play(move, board) {
    board.place(move, token);
  }
}

var game = new Game();
