const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const output = document.getElementById("result");

const RESULT = {
  ROCK: {
    ROCK: "DRAW",
    PAPER: "LOSE",
    SCISSORS: "WIN",
  },
  PAPER: {
    ROCK: "WIN",
    PAPER: "DRAW",
    SCISSORS: "LOSE",
  },
  SCISSORS: {
    ROCK: "LOSE",
    PAPER: "WIN",
    SCISSORS: "DRAW",
  },
};

rock.addEventListener("click", () => play("ROCK"));
paper.addEventListener("click", () => play("PAPER"));
scissors.addEventListener("click", () => play("SCISSORS"));

function getRandomPlay(plays) {
  const randomIndex = Math.floor(Math.random() * plays.length);
  return plays[randomIndex];
}

function play(playerPlay) {
  const botPlay = getRandomPlay(["ROCK", "PAPER", "SCISSORS"]);
  output.innerHTML = playerPlay + " - " + RESULT[playerPlay][botPlay] + " - " + botPlay;
}