function render() {
  const gameBoard = document.getElementById("ticTacToeGrid");
  gameBoard.innerHTML = "";
  let gameBoardElement = [];
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      let aSquare = document.createElement("div");
      aSquare.id = `square${i}${j}`;
      aSquare.className = "squareSize";
      gameBoardElement.push(aSquare);
    }
  }
  gameBoardElement.forEach((element) => {
    gameBoard.append(element);
  });
}
