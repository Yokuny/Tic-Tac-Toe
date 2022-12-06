function playChoice(id) {
  const square = document.getElementById(id);
  square.textContent = "X";
}

function gameBoardRender() {
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
}
const player = (name, xOrSquare) => {
  let winCount = 0;
  if (name == "") {
    name = "Player";
  }
  return { name, xOrSquare, winCount };
};
function createPlayers(player1Name, player2Name, iaMode) {
  const firstPlayer = player(player1Name, "X", iaMode);
  const secondPlayer = player(player2Name, "O", iaMode);

  if (iaMode) {
  } else {
  }

  const firstPlayerDOMElement = document.getElementById("firstPlayerName");
  firstPlayerDOMElement.textContent = `${firstPlayer.name} - ${firstPlayer.xOrSquare}`;
  const secondPlayerDOMElement = document.getElementById("secondPlayerName");
  secondPlayerDOMElement.textContent = `${secondPlayer.name} - ${secondPlayer.xOrSquare}`;
}
function registerScreen() {
  let firstPlayerInput = document.getElementById("firstPlayer").value;
  let secondPlayerInput = document.getElementById("secondPlayer").value;
  let vsIA = document.getElementById("iaYes").checked;
  const renderRegistration = document.getElementById("floatingRegisterDisplay");
  renderRegistration.style = "display:none;";
  createPlayers(firstPlayerInput, secondPlayerInput, vsIA);
  gameBoardRender();
}
