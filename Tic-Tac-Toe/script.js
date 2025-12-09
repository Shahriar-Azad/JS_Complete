    (function(){
      // Game state
      const boardEl = document.getElementById('board');
      const turnEl = document.getElementById('turn');
      const msgEl = document.getElementById('message');
      const scoreXEl = document.getElementById('scoreX');
      const scoreOEl = document.getElementById('scoreO');
      const scoreDEl = document.getElementById('scoreD');
      const restartBtn = document.getElementById('restart');
      const resetScoresBtn = document.getElementById('resetScores');
      const undoBtn = document.getElementById('undo');

      let board = Array(9).fill('');
      let current = 'X';
      let gameOver = false;
      let scores = { X:0, O:0, D:0 };
      let history = []; // store moves for undo

      const winCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ];

