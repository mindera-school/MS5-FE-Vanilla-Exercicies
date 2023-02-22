console.log();

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");

rock.addEventListener("click", () => {getResult("rock")});
paper.addEventListener("click", () => {getResult("paper")});
scissors.addEventListener("click", () => {getResult("scissors")});

function cpuInputFunction() {
  cpuInput = Math.floor(Math.random() * 3);
  switch (cpuInput) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
  }
}

function getResult(input) {
    cpuInputResult = cpuInputFunction();

    if (input == "rock" && cpuInputResult == "rock") {
      result.innerHTML = "Rock - empate - Rock";
      return;
    }

    if (input == "rock" && cpuInputResult == "paper") {
      result.innerHTML = "Rock - CPU Ganhou - Paper";
      return;
    }

    if (input == "rock" && cpuInputResult == "scissors") {
      result.innerHTML = "Rock - Player Ganhou - Scissors";
      return;
    }

    if (input == "paper" && cpuInputResult == "rock") {
      result.innerHTML = "Paper - Player Ganhou - Rock";
      return;
    }

    if (input == "paper" && cpuInputResult == "paper") {
      result.innerHTML = "Paper - Empate - Paper";
      return;
    }

    if (input == "paper" && cpuInputResult == "scissors") {
      result.innerHTML = "Paper - CPU Ganhou - Scissors";
      return;
    }

    if (input == "scissors" && cpuInputResult == "rock") {
      result.innerHTML = "Scissors - CPU Ganhou - Rock";
      return;
    }

    if (input == "scissors" && cpuInputResult == "paper") {
      result.innerHTML = "Scissors - Player Ganhou - Paper";
      return;
    }

    if (input == "scissors" && cpuInputResult == "scissors") {
      result.innerHTML = "Scissors - Empate - Scissors";
      return;
    }
}
