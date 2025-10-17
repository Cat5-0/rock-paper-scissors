  console.log("Hello Madelaine");

  // Prior to moving playGame to be looped 5 times

  // Prompt for user to enter their choice
  let humanInput = prompt("Please enter Rock, Paper or Scissors:");

  // Random number generated
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  // Function for computer choice that displays assigned name 
  // of generated random number 
  function getComputerChoice() {
    if (randomNumber == 1) {
        compChoice = "rock";
        console.log(compChoice);
    } else if (randomNumber === 2) {
        compChoice = "paper";
        console.log(compChoice);
    } else {
        compChoice = "scissors";
        console.log(compChoice);
    }
  }
  getComputerChoice();

  // Function to display human choice that was prompted for
  function getHumanChoice() {
    let humanInputToLowerCase = humanInput.toLowerCase();
    if (humanInputToLowerCase === "rock") {
        console.log("Rock");
    } else if (humanInputToLowerCase === "paper") {
        console.log("Paper");      
    } else if (humanInputToLowerCase === "scissors") {
        console.log("Scissors");     
    }
  }
  getHumanChoice();

  
  // Function that calls playRound 5 times, playRound function
  // and score variables moved and declared inside playGame function
  function playGame() {
 
    // Declare variables for keeping scores
  let humanScore = 0;
  let computerScore = 0;



    for (let i = 0; i < 5; i++) {
        console.log(`---- Game ${i + 1} ----`);
    
  // Inner function called here
  // Function takes human and computer choices as argumets
  // plays a single round, increments the round winner score 
  // and logs a winner announcement
  function playRound(humanChoice, computerChoice) {
    
    // function generateChoice() {
    //     let randomNumber = Math.floor(Math.random() * 3) + 1;
    //     getComputerChoice();
    //     console.log(`New computer selection ${compChoice}`);
    //     let humanInput = prompt("Please enter Rock, Paper or Scissors:");
    //     let humanInputToLowerCase = humanInput.toLowerCase();
    //     getHumanChoice();
    //     console.log(`New human selection ${humanInputToLowerCase}`);
    // }
    // generateChoice();
    
    let humanInputToLowerCase = humanInput.toLowerCase();
    if (humanInputToLowerCase === compChoice) {
        console.log("Tie selection, please start again");
        //return;
    } else if (humanInputToLowerCase === "rock" && compChoice === "scissors") {
        console.log("Human wins! Rock beats Scissors");
        humanScore += 1; 
        console.log("Human Score is: ", humanScore);
        //return;
    } else if (humanInputToLowerCase === "scissors" && compChoice === "paper") {
        console.log("Human wins! Scissors beats Paper");
        humanScore += 1; 
        console.log("Human Score is: ", humanScore);
        //return;
    } else if (humanInputToLowerCase === "paper" && compChoice === "rock") {
        console.log("Human wins! Paper beats Rock");
        humanScore += 1; 
        console.log("Human Score is: ", humanScore);
        // return; 
    } else if (compChoice === "rock" && humanInputToLowerCase === "scissors") {
        console.log("Computer wins! Rock beats Scissors");
        computerScore += 1;
        console.log("Computer Score is: ", computerScore);
        // return;
    } else if (compChoice === "scissors" && humanInputToLowerCase === "paper") {
        console.log("Computer wins! Scissors beats Paper");
        computerScore += 1;
        console.log("Computer Score is: ", computerScore);
        // return;
    } else if (compChoice === "paper" && humanInputToLowerCase === "rock") {
        console.log("Computer wins! Paper beats Rock");
        computerScore += 1;
        console.log("Computer Score is: ", computerScore);
        // return;
    } 
    let humanScoreTotal = humanScore;
    let computerScoreTotal = computerScore;
    console.log("Humans: ",humanScoreTotal, " Computer: ", computerScoreTotal);
  }  

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
    
  playRound(humanSelection, computerSelection);
 

  }
 
}
playGame();
