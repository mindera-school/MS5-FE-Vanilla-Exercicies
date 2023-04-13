let gameCounter = 1;
let playerOne = 0;
let playerTwo = 0;
let drawnGames = 0;
const boardArray = document.querySelectorAll(".container");
const playBtn = document.getElementById("play");

boardArray.forEach((button) => {
  button.addEventListener("click", () => {
    button.innerHTML = getLetter(gameCounter);
    button.disabled = true;
    checkWin();
    gameCounter++;
  });
});
function verification() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (gameCounter < 3) {
    return false;
  }

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];

    if (
      boardArray[a].innerHTML === boardArray[b].innerHTML &&
      boardArray[b].innerHTML === boardArray[c].innerHTML &&
      boardArray[a].innerHTML !== ""
    ) {
      return true;
    }
  }
  if (gameCounter === 9) {
    return "game draw";
  }
  return false;
}
function getLetter(gameCounter) {
  return gameCounter % 2 === 0 ? "X" : "O";
}
function checkWin() {
  if (verification() === true) {
    if (gameCounter >= 3) {
      giveScore();
      gameCounter = 0;
      disable();
      playAgain();
    }
  } else if (verification() === "game draw") {
    gameCounter = 0;
    document.getElementById("gamesDrawn").innerHTML = drawnGames + 1;
    drawnGames++;
    playAgain();
  }
  function reset() {
    boardArray.forEach((e) => {
      e.innerHTML = "";
      e.disabled = false;
    });
  }
  function disable() {
    boardArray.forEach((e) => {
      e.disabled = true;
    });
  }
  function giveScore() {
    let winningLetter = getLetter(gameCounter);
    if (winningLetter === "X") {
      document.getElementById("scorePl1").innerHTML = playerOne + 1;
      playerOne++;
    } else if (winningLetter === "O") {
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
