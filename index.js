const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor() {
    var player1 = new Player('player1', 'O');
    var player2 = new Player('player2', 'X');
    this.board = new Board();
  }
  promptMove(player) {
    rl.question(`Your turn ${player}!`, (move) => {
      player.play(move, this.board);
      console.log(`${player}: placed ${player.token} at ${move}`);
      rl.close();
    });
  }
  startRound() {
    this.board.display();
    promptMove('player1');
    promptMove('player2');
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
    var checkHorizontal = this.board.reduce(row => {
      var counter = 0;
      row.forEach(col => {

      })

    }, false);

    var checkVertical = function() {
      for (var i = 0; i < this.board.length; i++) {
        var counter = 0;
        for (var j = 0; j < this.board.length; j++) {

        }
        this.board[i]
      }
    }

    var checkDiagonol = function() {

    }


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
