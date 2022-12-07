/*
function currentPlayer() {}
function checkCurrentPlayer() {
  if (actualPlayer.xOrSquare == "O") {
    actualPlayer;
  }
}
*/

const playChoice = (id) => {
  const square = document.getElementById(id);
  square.textContent = "X";
};

const core = (() => {
  const gameBoardRender = () => {
    const gameBoard = document.getElementById("ticTacToeGrid");
    gameBoard.innerHTML = "";
    let gameBoardElement = [];
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        let aSquare = document.createElement("div");
        aSquare.style = `grid-area: a${i}${j}`;
        aSquare.className = "squareSize";
        aSquare.id = `square${i}${j}`;
        aSquare.innerText = "-";
        aSquare.addEventListener("click", function () {
          playChoice(`${this.id}`);
        });
        gameBoardElement.push(aSquare);
      }
    }
    gameBoardElement.forEach((element) => {
      gameBoard.append(element);
    });
  };
  const registerScreen = () => {
    document.getElementById("floatingRegisterDisplay").style = "display:none;";
    createPlayers(
      document.getElementById("firstPlayer").value,
      document.getElementById("secondPlayer").value,
      document.getElementById("iaYes").checked
    );
  };
  const displayPlayersName = (player1, player2) => {
    document.getElementById("firstPlayerName").textContent = `${player1.name} - ${player1.xo}`;
    document.getElementById("secondPlayerName").textContent = `${player2.name} - ${player2.xo}`;
  };
  return { gameBoardRender, registerScreen, displayPlayersName };
})();

const player = (name, xo, iaMode) => {
  let winCount = 0;
  const winIncrease = () => winCount++;
  const getWinAmount = () => winCount;
  if (name == "") {
    name = "Player";
  } else if (iaMode) {
    name = "IA";
  }
  return { name, xo, winIncrease, getWinAmount };
};

function createPlayers(name1, name2, iaMode) {
  const firstPlayer = player(name1, "X", iaMode);
  const secondPlayer = player(name2, "O", iaMode);
  core.displayPlayersName(firstPlayer, secondPlayer);
}
