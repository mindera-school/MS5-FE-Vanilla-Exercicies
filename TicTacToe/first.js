let count = 1;
let score1 = 0;
let score2 = 0;
let draw = 0;
const boardArray = document.querySelectorAll(".restart");
const play = document.getElementById("play");

boardArray.forEach(function (button) {
  button.addEventListener("click", () => {
    console.log(count);
    button.innerHTML = getLetter(count);
    button.disabled = true;
    checkWin();
    count++;
  });
});
function verification() {
  //check diogonal
  if (
    (boardArray[0].innerHTML === boardArray[4].innerHTML &&
      boardArray[4].innerHTML === boardArray[8].innerHTML &&
      boardArray[0].innerHTML != " ") ||
    (boardArray[2].innerHTML === boardArray[4].innerHTML &&
      boardArray[4].innerHTML === boardArray[6].innerHTML &&
      boardArray[2].innerHTML != " ")
  ) {
    console.log("diagonal");
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
    console.log("horizontal");
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
    console.log("vertical");
    return true;
  } else {
    if (count === 9) {
      console.log("draw");
      return "draw";
    }
    return false;
  }
}
function getLetter(count) {
  if (count % 2 == 0) {
    return "X";
  } else {
    return "O";
  }
}
function checkWin() {
  if (verification() == true) {
    giveScore();
    count = 0;
    disable();
    playAgain();
  }
  if (verification() == "draw") {
    count = 0;
    document.getElementById("draw").innerHTML = draw + 1;
    draw++;
    playAgain();
  }
  function reset() {
    boardArray.forEach(function (e) {
      e.innerHTML = " ";
      e.disabled = false;
    });
  }
  function disable() {
    boardArray.forEach(function (e) {
      e.disabled = true;
    });
  }
  function giveScore() {
    if (getLetter(count) === "X") {
      document.getElementById("scorePl1").innerHTML = score1 + 1;
      score1++;
    }
    if (getLetter(count) === "O") {
      document.getElementById("scorePl2").innerHTML = score2 + 1;
      score2++;
    }
  }
  function playAgain() {
    play.disabled = false;
    play.innerHTML = "Play Again";
    play.addEventListener("click", () => {
      reset();
      play.innerHTML = " ";
    });
  }
}
