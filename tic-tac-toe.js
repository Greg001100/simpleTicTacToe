window.onload = () => {
  const key = "ticTacGameState";
  let board = document.getElementById("tic-tac-toe-board");
  let h1 = document.getElementById("game-status");
  let winn = document.createTextNode(
    "A CHAMPION HAS BEEN CROWNED!!! A LOSER AS WELL, BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER."
  );

  let newGame = document.getElementById("newGame");
  let quit = document.getElementById("quit");

  let count = 0;
  let currentPlayer = "x";
  let squareArray = ["", "", "", "", "", "", "", "", ""];

  function saveGame() {
    const state = {
      currentPlayer,
      squareArray,
      count,
    };
    sessionStorage.setItem(key, JSON.stringify(state));
    console.log(sessionStorage);
  }

  function loadGame() {
    const saved = window.sessionStorage.getItem(key);
    console.log(saved);
    if (saved === null) return;

    const state = JSON.parse(saved);
    console.log(state);
    count = state.count;
    currentPlayer = state.currentPlayer;
    squareArray = state.squareArray;

    for (let i = 0; i < 9; i++) {
      let squareID = document.getElementById(`square-${i}`);
      if (squareArray[i] === "x") {
        squareID.innerHTML = `<img src="player-x.svg">`;
      } else if (squareArray[i] === "o") {
        squareID.innerHTML = `<img src="player-o.svg">`;
      }
    }
  }

  const winCheck = () => {
    squareArray.forEach((el, i) => {
      //horizontals and diagonals
      if (
        squareArray[0] === squareArray[1] &&
        squareArray[0] === squareArray[2] &&
        squareArray[0] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
      if (
        squareArray[3] === squareArray[4] &&
        squareArray[3] === squareArray[5] &&
        squareArray[3] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
      if (
        squareArray[6] === squareArray[7] &&
        squareArray[7] === squareArray[8] &&
        squareArray[6] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
      if (
        squareArray[0] === squareArray[4] &&
        squareArray[0] === squareArray[8] &&
        squareArray[0] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
      if (
        squareArray[2] === squareArray[4] &&
        squareArray[2] === squareArray[6] &&
        squareArray[2] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
    });
    squareArray.forEach((el, i) => {
      //verticals
      if (
        squareArray[0] === squareArray[3] &&
        squareArray[0] === squareArray[6] &&
        squareArray[0] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
      if (
        squareArray[1] === squareArray[4] &&
        squareArray[1] === squareArray[7] &&
        squareArray[1] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
      if (
        squareArray[2] === squareArray[5] &&
        squareArray[2] === squareArray[8] &&
        squareArray[2] === currentPlayer
      ) {
        h1.innerText = `A CHAMPION ${currentPlayer.toUpperCase()} HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
        document.getElementById("newGame").disabled = false;
      }
    });
  };

  let ai = document.getElementById("AI");
  let android = () => {
    let randomNum = Math.floor(Math.random() * 9);
    console.log(randomNum);
    let aiPick = document.getElementById(`square-${randomNum}`);
    console.log(aiPick);
    if (currentPlayer === "x") {
      if (squareArray[randomNum] === "") {
        squareArray[randomNum] = "x";
        count++;
        aiPick.innerHTML = `<img src="player-x.svg">`;
        winCheck();
        currentPlayer = "o";
        saveGame();
      } else {
        android();
      }
    } else {
      if (squareArray[randomNum] === "") {
        squareArray[randomNum] = "o";
        count++;
        aiPick.innerHTML = `<img src="player-o.svg">`;
        winCheck();
        currentPlayer = "x";
        saveGame();
      } else {
        android();
      }
    }
  };
  ai.addEventListener("click", (e) => {
    if (currentPlayer === "x") {
      let midSquare = document.getElementById(`square-4`);
      if (squareArray[4] === "") {
        console.log("you can't win Dave");
        midSquare.innerHTML = `<img src="player-x.svg">`;
        count++;
        squareArray[4] = "x";
        currentPlayer = "o";
        saveGame();
      } else {
        android();
      }
    } else {
      let midSquare = document.getElementById(`square-4`);
      if (squareArray[4] === "") {
        console.log("you can't win Dave");
        midSquare.innerHTML = `<img src="player-o.svg">`;
        count++;
        squareArray[4] = "o";
        currentPlayer = "x";
        saveGame();
      } else {
        android();
      }
    }
  });
  console.log("this is annoying");
  // let   says = document.createElement('h2');
  //   let that = document.createTextNode('Pitiful human, you have no chance');
  //   says.appendChild(that);
  // document.body.appendChild(says);

  quit.addEventListener("click", (e) => {
    if (currentPlayer === "x") {
      h1.innerText = `A CHAMPION 'O' HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
      document.getElementById("newGame").disabled = false;
    } else {
      h1.innerText = `A CHAMPION 'X' HAS BEEN CROWNED!!! BE YE HUMBLED IN THE PRESENCE OF GREATNESS, LOSER.`;
      document.getElementById("newGame").disabled = false;
    }
  });

  newGame.addEventListener("click", (e) => {
    sessionStorage.clear();
    location.reload();
  });

  board.addEventListener("click", (e) => {
    if (event.target === board) {
      return;
    }
    if (h1.innerText.length !== 0) {
      return;
    }
    const targetId = e.target.id;
    const squareIndex = Number.parseInt(targetId[targetId.length - 1]);

    if (e.target.innerHTML.length === 0) {
    } else {
      count++;
    }
    if (count > 8) {
      h1.innerText = `THERE ARE NAUGHT BUT LOSERS HERE!!`;
      document.getElementById("newGame").disabled = false;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="player-o.svg">`;
      squareArray[squareIndex] = currentPlayer;
      winCheck();
      currentPlayer = "x";
    } else {
      e.target.innerHTML = `<img src="player-x.svg">`;
      squareArray[squareIndex] = currentPlayer;
      winCheck();
      currentPlayer = "o";
    }
    saveGame();
    console.log(count);
  });
  loadGame();
};
