const userScore = 0;
const computerScore = 0;
const userScore_spanEL = document.getElementById("user-score");
const computerScore_spanEL = document.getElementById("computer-score");
const scoreBoard_divEL = document.querySelector(".score-board");
const result_divEL = document.querySelector(".result");
const rock_divEL = document.getElementById("rock");
const paper_divEL = document.getElementById("paper");
const scissors_divEL = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("userChoice: " + userChoice);
  console.log("computerChoice: " + computerChoice);
  switch (userChoice + computerChoice) {
    // Cases of a tie
    case "rockrock":
      console.log(
        "Two rocks collide. Nothing more than a clink sound. 'Tis a tie."
      );
      break;

    case "paperpaper":
      console.log("Paper contacts paper. Nothing but a crinkle. 'Tis a tie.");
      break;

    case "scissorsscissors":
      console.log(
        "Scissors clash with scissors. Just a scraping sound. 'Tis a tie."
      );
      break;
    // Cases of user winning
    case "paperrock":
      console.log("Paper engulfs rock. User is victorious!");
      break;

    case "scissorspaper":
      console.log("Scissors cut through paper. User is victorious!");
      break;

    case "rockscissors":
      console.log("Rock smashes scissors. User is victorious!");
      break;
    // Cases of computer winning
    case "rockpaper":
      console.log("Rock is engulfed by paper. User is defeated!");
      break;

    case "paperscissors":
      console.log("Paper is cut by scissors. User is defeated!");
      break;

    case "scissorsrock":
      console.log("Scissors are smashed by rock. User is defeated!");
      break;
  }
}

function main() {
  rock_divEL.addEventListener("click", function () {
    game("rock");
  });

  paper_divEL.addEventListener("click", function () {
    game("paper");
  });

  scissors_divEL.addEventListener("click", function () {
    game("scissors");
  });
}

main();
