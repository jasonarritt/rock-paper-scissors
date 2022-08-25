let userScore = 0;
let computerScore = 0;
const userScore_spanEL = document.getElementById("user-score");
const computerScore_spanEL = document.getElementById("computer-score");
const scoreBoard_divEL = document.querySelector(".score-board");
const result_divEL = document.querySelector(".result > p");
const rock_divEL = document.getElementById("rock");
const paper_divEL = document.getElementById("paper");
const scissors_divEL = document.getElementById("scissors");
const reset_buttonEL = document.getElementById("reset");

function win() {
  userScore++;
  userScore_spanEL.innerHTML = userScore;
  computerScore_spanEL.innerHTML = computerScore;
}

function lose() {
  computerScore++;
  computerScore_spanEL.innerHTML = computerScore;
  userScore_spanEL.innerHTML = userScore;
}

function reset() {
  userScore = 0;
  computerScore = 0;
  userScore_spanEL.innerHTML = userScore;
  computerScore_spanEL.innerHTML = computerScore;
  result_divEL.innerHTML = "Choose your weapon!";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  //   console.log("userChoice: " + userChoice);
  //   console.log("computerChoice: " + computerChoice);
  switch (userChoice + computerChoice) {
    // Cases of a tie
    case "rockrock":
      result_divEL.innerHTML =
        "Two rocks collide. Nothing more than a clink sound. 'Tis a tie.";
      tie();
      break;

    case "paperpaper":
      result_divEL.innerHTML =
        "Paper contacts paper. Nothing but a crinkle. 'Tis a tie.";
      tie();
      break;

    case "scissorsscissors":
      result_divEL.innerHTML =
        "Scissors clash with scissors. Just a scraping sound. 'Tis a tie.";
      tie();
      break;
    // Cases of user winning
    case "paperrock":
      result_divEL.innerHTML = "Paper engulfs rock. User is victorious!";
      win();
      break;

    case "scissorspaper":
      result_divEL.innerHTML =
        "Scissors cut through paper. User is victorious!";
      win();
      break;

    case "rockscissors":
      result_divEL.innerHTML = "Rock smashes scissors. User is victorious!";
      win();
      break;
    // Cases of computer winning
    case "rockpaper":
      result_divEL.innerHTML = "Rock is engulfed by paper. User is defeated!";
      lose();
      break;

    case "paperscissors":
      result_divEL.innerHTML = "Paper is cut by scissors. User is defeated!";
      lose();
      break;

    case "scissorsrock":
      result_divEL.innerHTML =
        "Scissors are smashed by rock. User is defeated!";
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
