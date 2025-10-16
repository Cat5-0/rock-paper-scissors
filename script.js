  console.log("Hello Madelaine");

  // Declare variables for keeping scores
  let humanScore = 0;
  let computerScore = 0;
  
  // Prompt for user to enter their choice
  let humanChoice = prompt("Please enter Rock, Paper or Scissors:  ");

  // Random number generated
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log("Computer", randomNumber);

  // Variable for user choice assigned to human number
  let humanNumber;

  // Function for computer choice that displays assigned name 
  // of generated random number 
  function getComputerChoice() {
    if (randomNumber == 1) {
        console.log("Computer" + " " + "Rock");
    } else if (randomNumber === 2) {
        console.log("Computer" + " " + "Paper");
    } else {
        console.log("Computer" + " " + "Scissors");
    }
  }
  getComputerChoice();

  // Function to display human choice that was prompted for
  function getHumanChoice() {
    if (humanChoice === "Rock") {
        humanNumber = 1;
        console.log("Rock");
        console.log("Human Number", humanNumber);
    } else if (humanChoice === "Paper") {
        humanNumber = 2;
        console.log("Paper");
    } else if (humanChoice === "Scissors") {
        humanNumber = 3;
        console.log("Scissors");
    }
  }
  getHumanChoice();

