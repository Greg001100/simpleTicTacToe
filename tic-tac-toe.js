window.onload = () => {
  const squares = document.querySelectorAll;
  let board = document.getElementById("tic-tac-toe-board");
  let h1 = document.getElementById("game-status")
  let winn = document.createTextNode("A CHAMPION HAS BEEN CROWNED!!! A LOSER AS WELL, BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.");

  let newGame = document.getElementById('newGame');
  let quit = document.getElementById('quit');

  let count = 0;
  let currentPlayer = 'x'
  let squareArray = ['','','','','','','','','']



  const winCheck = () => {
    squareArray.forEach((el, i) => {//horizontals and diagonals
      if(squareArray[0] === squareArray[1] && squareArray[0] === squareArray[2] && squareArray[0] === currentPlayer) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById('newGame').disabled = false;
      }
      if(squareArray[3] === squareArray[4] && squareArray[3] === squareArray[5] && squareArray[3] === currentPlayer) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById('newGame').disabled = false;
      }
      if(squareArray[6] === squareArray[7] && squareArray[7] === squareArray[8] && squareArray[6] === currentPlayer) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById('newGame').disabled = false;
      }
      if(squareArray[0] === squareArray[4] && squareArray[0] === squareArray[8] && squareArray[0] === currentPlayer) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById('newGame').disabled = false;
      }
      if(squareArray[2] === squareArray[4] && squareArray[2] === squareArray[6] && squareArray[2] === currentPlayer) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById('newGame').disabled = false;
      }

    })
    squareArray.forEach((el, i) => {//verticals
      if(squareArray[0] === squareArray[3]
        && squareArray[0] === squareArray[6]
        && squareArray[0] === currentPlayer) {
          h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          document.getElementById('newGame').disabled = false;
        }
        if(squareArray[1] === squareArray[4]
          && squareArray[1] === squareArray[7]
          && squareArray[1] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
            document.getElementById('newGame').disabled = false;
          }
          if(squareArray[2] === squareArray[5]
            && squareArray[2] === squareArray[8]
            && squareArray[2] === currentPlayer) {
              h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
              document.getElementById('newGame').disabled = false;
            }
          })
        }

        board.addEventListener("click", (e) => {
          if(h1.innerText.length !== 0) {
          }
          const targetId = e.target.id;
          const squareIndex = Number.parseInt(targetId[targetId.length-1]);

          // newGame.addEventListener('click', e => {
          //   count = 0;
          //   currentPlayer = 'x';
          //   squareArray = ['','','','','','','','','']
          // })
          // quit.addEventListener('click', e => {
          //   if(currentPlayer === 'x') {
          //     h1.innerText = `A CHAMPION 'O' HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          //   } else {
          //     h1.innerText = `A CHAMPION 'X' HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          //   }
          // })
          if (e.target.innerHTML.length === 0) {
          } else {
            count++;
          }
          if(count > 8) {
            h1.innerText = `THERE ARE NAUGHT BUT LOSERS HERE!!`
            document.getElementById('newGame').disabled = false;
          }

          if (count % 2 === 0) {
            e.target.innerHTML = `<img src="player-o.svg">`;
            squareArray[squareIndex] = currentPlayer;
            winCheck();
            currentPlayer = 'x';

          } else {
            e.target.innerHTML = `<img src="player-x.svg">`;
            squareArray[squareIndex] = currentPlayer;
            winCheck();
            currentPlayer = 'o';

          }

          console.log(squareArray)
          console.log(count);
        });

      };
