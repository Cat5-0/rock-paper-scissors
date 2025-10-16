  console.log("Hello Madelaine");

  // Declare variables for keeping scores
  let humanScore = 0;
  let computerScore = 0;

  // Prompt for user to enter their choice
  let humanInput = prompt("Please enter Rock, Paper or Scissors:");

  // Random number generated
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log("Computer Number", randomNumber);

  // Variable for user choice assigned to human number I added to verify 
  // which console.log is human or computer
  let humanNumber;
  let randomName;

  // Function for computer choice that displays assigned name 
  // of generated random number 
  function getComputerInput() {
    if (randomNumber == 1) {
        randomName = "Rock";
        console.log("Computer Rock");
    } else if (randomNumber === 2) {
        randomName = "Paper";
        console.log("Computer Paper");
    } else {
        randomName = "Scissors";
        console.log("Computer Scissors");
    }
  }
  getComputerInput();

  // Function to display human choice that was prompted for
  function getHumanInput() {
    if (humanInput === "Rock") {
        humanNumber = 1;
        console.log("Human Rock");
        console.log("Human Number", humanNumber);
    } else if (humanInput === "Paper") {
        humanNumber = 2;
        console.log("Human Paper");
        console.log("Human Number", humanNumber);
    } else if (humanInput === "Scissors") {
        humanNumber = 3;
        console.log("Human Scissors");
        console.log("Human Number", humanNumber);
    }computerChoice
  }
  getHumanInput();

  // Function takes human and computer choices as argumets
  // plays a single round, increments the round winner score 
  // and logs a winner announcement

  let humanChoice = humanInput.toLowerCase();
  let computerChoice = randomName.toLowerCase()

  function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, randomName);
  }
  playRound();
 
