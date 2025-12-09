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

      // Create cells
      function createBoard(){
        boardEl.innerHTML = '';
        for(let i=0;i<9;i++){
          const btn = document.createElement('button');
          btn.className = 'cell';
          btn.setAttribute('data-cell', i);
          btn.setAttribute('role','gridcell');
          btn.setAttribute('aria-label', `Cell ${i+1}`);
          btn.tabIndex = 0;
          btn.addEventListener('click', onCellClick);
          btn.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCellClick(e); } });
          boardEl.appendChild(btn);
        }
      }

      function onCellClick(e){
        const idx = Number(e.currentTarget.dataset.cell);
        makeMove(idx);
      }

      function makeMove(i){
        if(gameOver) return;
        if(board[i] !== '') return;
        board[i] = current;
        history.push({idx:i, player:current});
        render();
        const winner = checkWin();
        if(winner){
          gameOver = true;
          scores[winner]++;
          updateScores();
          msgEl.textContent = `${winner} wins!`;
          highlightWin(winner);
          return;
        }
        if(board.every(Boolean)){
          gameOver = true;
          scores.D++;
          updateScores();
          msgEl.textContent = `It's a draw`;
          return;
        }
        current = current === 'X' ? 'O' : 'X';
        turnEl.textContent = current;
        msgEl.textContent = `Player ${current}'s turn`;
      }

      function checkWin(){
        for(const combo of winCombos){
          const [a,b,c] = combo;
          if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];
          }
        }
        return null;
      }

      function highlightWin(winner){
        // add win class to winning cells
        for(const combo of winCombos){
          const [a,b,c] = combo;
          if(board[a] && board[a] === board[b] && board[a] === board[c]){
            const cells = [a,b,c].map(i=>boardEl.querySelector(`[data-cell='${i}']`));
            cells.forEach((el,idx)=>{
              el.classList.add('win');
              // tiny delay for cascade
              el.style.transitionDelay = (idx*60) + 'ms';
            });
            break;
          }
        }
      }

      function render(){
        for(let i=0;i<9;i++){
          const cell = boardEl.querySelector(`[data-cell='${i}']`);
          cell.textContent = board[i];
          cell.classList.remove('x','o');
          if(board[i]) cell.classList.add(board[i].toLowerCase());
        }
      }

      function restart(){
        board = Array(9).fill('');
        current = 'X';
        gameOver = false;
        history = [];
        turnEl.textContent = current;
        msgEl.textContent = 'Make a move';
        // remove win styles
        boardEl.querySelectorAll('.cell').forEach(c=>{ c.classList.remove('win'); c.style.transitionDelay = '0ms'; });
        render();
      }

      function updateScores(){
        scoreXEl.textContent = scores.X;
        scoreOEl.textContent = scores.O;
        scoreDEl.textContent = scores.D;
      }

      function resetScores(){ scores = {X:0,O:0,D:0}; updateScores(); }

      function undo(){
        if(history.length === 0 || gameOver) return;
        const last = history.pop();
        board[last.idx] = '';
        current = last.player;
        gameOver = false;
        turnEl.textContent = current;
        msgEl.textContent = `Undid move. Player ${current}'s turn`;
        boardEl.querySelectorAll('.cell').forEach(c=>{ c.classList.remove('win'); c.style.transitionDelay = '0ms'; });
        render();
      }

      // keyboard support
      window.addEventListener('keydown', function(e){
        if(e.key >= '1' && e.key <= '9'){
          const idx = mapKeyToIndex(e.key);
          makeMove(idx);
        }
        if(e.key === 'r' || e.key === 'R') restart();
        if(e.key === 'u' || e.key === 'U') undo();
      });
      function mapKeyToIndex(key){
        // map 1..9 to grid (top-left=1, top-right=3, bottom-right=9)
        // numeric keypad style: 1 => 0, 2=>1, 3=>2, 4=>3,5=>4,6=>5,7=>6,8=>7,9=>8
        return Number(key) - 1;
      }

      // wire buttons
      restartBtn.addEventListener('click', restart);
      resetScoresBtn.addEventListener('click', function(){ resetScores(); msgEl.textContent = 'Scores reset'; });
      undoBtn.addEventListener('click', undo);

      // init
      createBoard();
      render();
    })();
