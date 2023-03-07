let gameCounter = 1;
let playerOne = 0;
let playerTwo = 0;
let drawnGames = 0;
const boardArray = document.querySelectorAll(".container");
const playBtn = document.getElementById("play");

boardArray.forEach(button => {
  button.addEventListener("click", () => {
    button.innerHTML = getLetter(gameCounter);
    button.disabled = true;
    checkWin();
    gameCounter++;
  });
});
function verification() {
  //check diagonal
  if (
    (boardArray[0].innerHTML === boardArray[4].innerHTML &&
      boardArray[4].innerHTML === boardArray[8].innerHTML &&
      boardArray[0].innerHTML != " ") ||
    (boardArray[2].innerHTML === boardArray[4].innerHTML &&
      boardArray[4].innerHTML === boardArray[6].innerHTML &&
      boardArray[2].innerHTML != " ")
  ) {
    return true;
  }
  //check horizontal
  if (
    (boardArray[0].innerHTML === boardArray[3].innerHTML &&
      boardArray[3].innerHTML === boardArray[6].innerHTML &&
      boardArray[0].innerHTML != " ") ||
    (boardArray[1].innerHTML === boardArray[4].innerHTML &&
      boardArray[4].innerHTML === boardArray[7].innerHTML &&
      boardArray[1].innerHTML != " ") ||
    (boardArray[2].innerHTML === boardArray[5].innerHTML &&
      boardArray[5].innerHTML === boardArray[8].innerHTML &&
      boardArray[5].innerHTML != " ")
  ) {
    return true;
  }
  //check vertical
  if (
    (boardArray[0].innerHTML === boardArray[1].innerHTML &&
      boardArray[1].innerHTML === boardArray[2].innerHTML &&
      boardArray[0].innerHTML != " ") ||
    (boardArray[3].innerHTML === boardArray[4].innerHTML &&
      boardArray[4].innerHTML === boardArray[5].innerHTML &&
      boardArray[3].innerHTML != " ") ||
    (boardArray[6].innerHTML === boardArray[7].innerHTML &&
      boardArray[7].innerHTML === boardArray[8].innerHTML &&
      boardArray[6].innerHTML != " ")
  ) {
    return true;
  } else if (gameCounter === 9) {
      return "game draw";
    }
    return false;
  }
}
function getLetter(count) {
  count % 2 == 0 ? "X" : "O";
}
function checkWin() {
  if (verification()) {
    giveScore();
    gameCounter = 0;
    disable();
    playAgain();
  }
  if (verification() === "game draw") {
    gameCounter = 0;
    document.getElementById("gameDrawn").innerHTML = drawnGames + 1;
    drawnGames++;
    playAgain();
  }
  function reset() {
    boardArray.forEach(e => {
      e.innerHTML = " ";
      e.disabled = false;
    });
  }
  function disable() {
    boardArray.forEach( (e) => {
      e.disabled = true;
    });
  }
  function giveScore() {
    if (getLetter(gameCounter) === "X") {
      document.getElementById("scorePl1").innerHTML = playerOne + 1;
      playerOne++;
    } else {
      document.getElementById("scorePl2").innerHTML = playerTwo + 1;
      playerTwo++;
    }
  }
  function playAgain() {
    playBtn.disabled = false;
    playBtn.innerHTML = "Play Again";
    playBtn.addEventListener("click", () => {
      reset();
      playBtn.innerHTML = " ";
    });
  }
}
