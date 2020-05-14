window.onload = () => {
  const squares = document.querySelectorAll;
  let board = document.getElementById("tic-tac-toe-board");
  let h1 = document.getElementById("game-status")
  let winn = document.createTextNode("A CHAMPION HAS BEEN CROWNED!!! A LOSER AS WELL, BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.");

  let count = 0;
  let currentPlayer = 'x'
  let squareArray = ['','','','','','','','','']


  const winCheck = () => {
      squareArray.forEach((el, i) => {//horizontals and diagonals
          if(squareArray[0] === squareArray[1] && squareArray[0] === squareArray[2] && squareArray[0] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          }
          if(squareArray[3] === squareArray[4] && squareArray[3] === squareArray[5] && squareArray[3] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          }
          if(squareArray[6] === squareArray[1] && squareArray[7] === squareArray[8] && squareArray[6] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          }
          if(squareArray[0] === squareArray[4] && squareArray[0] === squareArray[8] && squareArray[0] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          }
          if(squareArray[2] === squareArray[4] && squareArray[2] === squareArray[6] && squareArray[2] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
          }

      })
      squareArray.forEach((el, i) => {//verticals
        if(squareArray[0] === squareArray[3]
            && squareArray[0] === squareArray[6]
            && squareArray[0] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        }
        if(squareArray[1] === squareArray[4]
            && squareArray[1] === squareArray[7]
            && squareArray[1] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        }
        if(squareArray[2] === squareArray[5]
             && squareArray[2] === squareArray[8]
             && squareArray[2] === currentPlayer) {
            h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        }
    })
  }

  board.addEventListener("click", (e) => {
      if(h1.innerText.length !== 0) {
      }
    const targetId = e.target.id;
    const squareIndex = Number.parseInt(targetId[targetId.length-1]);

    if (e.target.innerHTML.length === 0) {
      } else {
          count++;
      }
    if(count > 8) {
        h1.innerText = `THERE ARE NAUGHT BUT LOSERS HERE!!`
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
