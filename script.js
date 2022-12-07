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
const player = (name, xOrSquare, iaMode) => {
  let winCount = 0;
  const winIncrease = (winCount) => winCount++;
  z;
  if (name == "") {
    name = "Player";
  } else if (iaMode) {
    name = "IA";
  }
  return { name, xOrSquare, winCount, winIncrease };
};
function createPlayers(player1Name, player2Name, iaMode) {
  const firstPlayer = player(player1Name, "X", iaMode);
  const secondPlayer = player(player2Name, "O", iaMode);
  console.log(firstPlayer.winIncrease());
  //Display de Nomes dos jogadores na tela
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

function funcao() {
  const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();

  calculator.add(3, 5); // 8
  calculator.sub(6, 2); // 4
  calculator.mul(14, 5534); // 77476
}
