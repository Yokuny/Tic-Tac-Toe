const player = (playerName, playerxo, iaMode) => {
  let name = playerName;
  if (name == "") {
    name = "Player";
  } else if (iaMode) {
    name = "IA";
  }
  const getPlayerName = () => name;
  let xo = playerxo;
  const getXO = () => xo;
  let winCount = 0;
  const winIncrease = () => winCount++;
  const getWinAmount = () => winCount;
  return { getPlayerName, getXO, winIncrease, getWinAmount };
};
const core = (() => {
  const gameBoardClear = () => {
    document.getElementById("ticTacToeGrid").innerHTML = "";
  };
  const closeRegisterScreen = () => {
    document.getElementById("floatingRegisterDisplay").style = "display:none;";
  };
  const idsArray = () => {
    const squareIds = Array(9);
    let index = 0;
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        squareIds[index] = `${i}${j}`;
        index++;
      }
    }
    return squareIds;
  };
  const squareElement = (elementsId) => {
    let squareElement = [];
    elementsId.forEach((element) => {
      let aSquare = document.createElement("div");
      aSquare.style = `grid-area: a${element}`;
      aSquare.className = "squareSize";
      aSquare.id = `square${element}`;
      aSquare.innerText = `-`;
      if (element == "x" || element == "X") {
        aSquare.innerText = `X`;
      } else if (element == "o" || element == "O") {
        aSquare.innerText = `O`;
      }
      aSquare.addEventListener("click", function () {
        play(`${this.id}`);
      });
      squareElement.push(aSquare);
    });
    return { squareElement };
  };
  const gameBoardRender = (boardGridElements) => {
    const gameBoard = document.getElementById("ticTacToeGrid");
    boardGridElements.forEach((element) => {
      gameBoard.append(element);
    });
  };
  const displayPlayersName = (player1, player2) => {
    document.getElementById(
      "firstPlayerName"
    ).textContent = `${player1.getPlayerName()} - ${player1.getXO()}`;
    document.getElementById(
      "secondPlayerName"
    ).textContent = `${player2.getPlayerName()} - ${player2.getXO()}`;
  };
  return {
    gameBoardClear,
    closeRegisterScreen,
    idsArray,
    squareElement,
    gameBoardRender,
    displayPlayersName,
  };
})();

let firstPlayer;
let secondPlayer;
let currentPlayer;

function checkCurrentPlayer() {
  if (actualPlayer.xOrSquare == "O") {
    actualPlayer;
  }
}
function play(id) {
  const square = document.getElementById(id);
  square.textContent = "X";
}

function start() {
  core.gameBoardClear();
  core.closeRegisterScreen();
  const squares = core.squareElement(core.idsArray());
  core.gameBoardRender(squares.squareElement);
  firstPlayer = player(
    document.getElementById("firstPlayer").value,
    "X",
    document.getElementById("iaYes").checked
  );
  secondPlayer = player(
    document.getElementById("secondPlayer").value,
    "O",
    document.getElementById("iaYes").checked
  );
  core.displayPlayersName(firstPlayer, secondPlayer);
}
