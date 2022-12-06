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

function playChoice(id) {
  const square = document.getElementById(id);
  square.textContent = "X";
}

function registerScreen() {
  let firstPlayerInput = document.getElementById("firstPlayer").value;
  let secondPlayerInput = document.getElementById("secondPlayer").value;
  let vsIA = document.getElementById("iaYes").checked;
  const renderRegistration = document.getElementById("floatingRegisterDisplay");
  renderRegistration.style = "display:none;";
  gameBoardRender();
}
