const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");

const results = {
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
  result.innerHTML = playerPlay + " - " + results[playerPlay][botPlay] + " - "+ botPlay;
}