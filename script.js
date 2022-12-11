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
  const changeCurrentPlayer = (xo) => {
    if (xo == "X" || xo == "x") {
      currentPlayer = secondPlayer;
    } else {
      currentPlayer = firstPlayer;
    }
  };
  function winnerDisplay(id1, id2, id3) {
    document.getElementById(`square${id1}`).style.backgroundColor = "#00ec3b";
    document.getElementById(`square${id2}`).style.backgroundColor = "#00ec3b";
    document.getElementById(`square${id3}`).style.backgroundColor = "#00ec3b";
  }
  function sequenceCheck(a1, a2, a3) {
    if (a1 == "-" || a2 == "-" || a3 == "-") {
      return false;
    } else {
      return a1 == a2 && a1 == a3;
    }
  }
  const winnerCheck = () => {
    const square11 = document.getElementById("square11").innerHTML;
    const square12 = document.getElementById("square12").innerHTML;
    const square13 = document.getElementById("square13").innerHTML;
    const square21 = document.getElementById("square21").innerHTML;
    const square22 = document.getElementById("square22").innerHTML;
    const square23 = document.getElementById("square23").innerHTML;
    const square31 = document.getElementById("square31").innerHTML;
    const square32 = document.getElementById("square32").innerHTML;
    const square33 = document.getElementById("square33").innerHTML;
    if (sequenceCheck(square11, square12, square13)) {
      winnerDisplay(11, 12, 13);
      return true;
    } else if (sequenceCheck(square21, square22, square23)) {
      winnerDisplay(21, 22, 23);
      return true;
    } else if (sequenceCheck(square31, square32, square33)) {
      winnerDisplay(31, 32, 33);
      return true;
    } else if (sequenceCheck(square11, square21, square31)) {
      winnerDisplay(11, 21, 31);
      return true;
    } else if (sequenceCheck(square12, square22, square32)) {
      winnerDisplay(12, 22, 32);
      return true;
    } else if (sequenceCheck(square13, square23, square33)) {
      winnerDisplay(13, 23, 33);
      return true;
    } else if (sequenceCheck(square11, square22, square33)) {
      winnerDisplay(11, 22, 33);
      return true;
    } else if (sequenceCheck(square31, square22, square13)) {
      winnerDisplay(31, 22, 13);
      return true;
    } else return;
  };
  const winAmountDisplay = () => {
    document.getElementById(
      "firstPlayerName"
    ).textContent = `${firstPlayer.getPlayerName()} - ${firstPlayer.getXO()} - Vitórias ${firstPlayer.getWinAmount()}`;
    document.getElementById(
      "secondPlayerName"
    ).textContent = `${secondPlayer.getPlayerName()} - ${secondPlayer.getXO()} - Vitórias ${secondPlayer.getWinAmount()}`;
  };
  const reset = () => {};
  return {
    gameBoardClear,
    closeRegisterScreen,
    idsArray,
    squareElement,
    gameBoardRender,
    displayPlayersName,
    changeCurrentPlayer,
    winnerCheck,
    winAmountDisplay,
    reset,
  };
})();

let firstPlayer;
let secondPlayer;
let currentPlayer;

function play(id) {
  const square = document.getElementById(id);
  if (square.innerHTML != "-") return;
  if (!core.winnerCheck()) {
    square.textContent = currentPlayer.getXO();
    if (!core.winnerCheck()) core.changeCurrentPlayer(currentPlayer.getXO());
  } else {
    if (firstPlayer.getXO() == currentPlayer.getXO()) {
      firstPlayer.winIncrease();
    } else {
      secondPlayer.winIncrease();
    }
    core.winAmountDisplay();
    core.reset();
  }
}
function start() {
  core.gameBoardClear();
  core.closeRegisterScreen();
  const squares = core.squareElement(core.idsArray());
  core.gameBoardRender(squares.squareElement);
  firstPlayer = player(document.getElementById("firstPlayer").value, "X", false);
  secondPlayer = player(
    document.getElementById("secondPlayer").value,
    "O",
    document.getElementById("iaYes").checked
  );
  currentPlayer = firstPlayer;
  core.displayPlayersName(firstPlayer, secondPlayer);
}
