let userScore = 0;
let computerScore = 0;
const userScore_spanEL = document.getElementById("user-score");
const computerScore_spanEL = document.getElementById("computer-score");
const scoreBoard_divEL = document.querySelector(".score-board");
const result_pEL = document.querySelector(".result > p");
const rock_divEL = document.getElementById("rock");
const paper_divEL = document.getElementById("paper");
const scissors_divEL = document.getElementById("scissors");
const reset_buttonEL = document.getElementById("reset");

function win() {
  userScore++;
  userScore_spanEL.innerHTML = userScore;
  computerScore_spanEL.innerHTML = computerScore;
  result_pEL.classList.remove("ice-glow");
  result_pEL.classList.remove("red-glow");
  result_pEL.classList.remove("yellow-glow");
  result_pEL.classList.add("green-glow");
}

function lose() {
  computerScore++;
  computerScore_spanEL.innerHTML = computerScore;
  userScore_spanEL.innerHTML = userScore;
  result_pEL.classList.remove("ice-glow");
  result_pEL.classList.remove("green-glow");
  result_pEL.classList.remove("yellow-glow");
  result_pEL.classList.add("red-glow");
}

function tie() {
  result_pEL.classList.remove("ice-glow");
  result_pEL.classList.remove("green-glow");
  result_pEL.classList.remove("red-glow");
  result_pEL.classList.add("yellow-glow");
}

function reset() {
  userScore = 0;
  computerScore = 0;
  userScore_spanEL.innerHTML = userScore;
  computerScore_spanEL.innerHTML = computerScore;
  result_pEL.classList.remove("green-glow");
  result_pEL.classList.remove("yellow-glow");
  result_pEL.classList.remove("red-glow");
  result_pEL.classList.add("ice-glow");
  result_pEL.innerHTML = "Choose your weapon!";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    // Cases of a tie
    case "rockrock":
      result_pEL.innerHTML =
        "Two rocks collide. Nothing more than a clink sound. 'Tis a tie.";
      tie();
      break;

    case "paperpaper":
      result_pEL.innerHTML =
        "Paper contacts paper. Nothing but a crinkle. 'Tis a tie.";
      tie();
      break;

    case "scissorsscissors":
      result_pEL.innerHTML =
        "Scissors clash with scissors. Just a scraping sound. 'Tis a tie.";
      tie();
      break;
    // Cases of user winning
    case "paperrock":
      result_pEL.innerHTML = "Paper engulfs rock. User is victorious!";
      win();
      break;

    case "scissorspaper":
      result_pEL.innerHTML = "Scissors cut through paper. User is victorious!";
      win();
      break;

    case "rockscissors":
      result_pEL.innerHTML = "Rock smashes scissors. User is victorious!";
      win();
      break;
    // Cases of computer winning
    case "rockpaper":
      result_pEL.innerHTML = "Rock is engulfed by paper. User is defeated!";
      lose();
      break;

    case "paperscissors":
      result_pEL.innerHTML = "Paper is cut by scissors. User is defeated!";
      lose();
      break;

    case "scissorsrock":
      result_pEL.innerHTML = "Scissors are smashed by rock. User is defeated!";
      lose();
      break;
  }
}

function main() {
  reset();
  rock_divEL.addEventListener("click", function () {
    game("rock");
  });

  paper_divEL.addEventListener("click", function () {
    game("paper");
  });

  scissors_divEL.addEventListener("click", function () {
    game("scissors");
  });

  reset_buttonEL.addEventListener("click", function () {
    reset();
  });
}

main();
