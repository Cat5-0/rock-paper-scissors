  console.clear();
  console.log();
  console.log("Hello Great Player let us begin");

  // Function playGame 
  function playGame() {
 
  // Declare variables for keeping scores
  let humanScore = 0;
  let computerScore = 0;

  // For loop to allow 5 games 
  for (let i = 0; i < 5; i++) {
    console.log();
    console.log(`---- Now Play Game ${i + 1} ----`);

  // Prompt for user to enter their choice
  let humanInput = prompt("Please enter Rock, Paper or Scissors:");
  let humanInputToLowerCase = humanInput.toLowerCase();

  // Random number generator
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  // Function for computer choice also displays assigned name 
  // of generated random number
  function getComputerChoice() {
    if (randomNumber === 1) {
        compChoice = "rock";
        //console.log(compChoice);
    } else if (randomNumber === 2) {
        compChoice = "paper";
        //console.log(compChoice);
    } else {
        compChoice = "scissors";
        //console.log(compChoice);
    }
  }
  getComputerChoice();

  // Function for human choice that was prompted for also displays 
  // user choice
  function getHumanChoice() {
    let humanInputToLowerCase = humanInput.toLowerCase();
    if (humanInputToLowerCase === "rock") {
       // console.log("Rock");
    } else if (humanInputToLowerCase === "paper") {
       // console.log("Paper");      
    } else if (humanInputToLowerCase === "scissors") {
       // console.log("Scissors");     
    }
  }
  getHumanChoice();
    

  // Function takes human and computer choices as argumets
  // plays, increments the round winner score and logs
  // a winner announcement also displays game results
  function playRound(humanChoice, computerChoice) {
    
    let humanInputToLowerCase = humanInput.toLowerCase();

    if (humanInputToLowerCase === compChoice) {
        console.log("Tie selection");
    } else if (humanInputToLowerCase === "rock" && compChoice === "scissors") {
        console.log("Human wins! Rock beats Scissors");
        humanScore += 1; 
        console.log("Human Scored ", humanScore);
    } else if (humanInputToLowerCase === "scissors" && compChoice === "paper") {
        console.log("Human wins! Scissors beats Paper");
        humanScore += 1; 
        console.log("Human Scored ", humanScore);
    } else if (humanInputToLowerCase === "paper" && compChoice === "rock") {
        console.log("Human wins! Paper beats Rock");
        humanScore += 1; 
        console.log("Human Scored ", humanScore);
    } else if (compChoice === "rock" && humanInputToLowerCase === "scissors") {
        console.log("Computer wins! Rock beats Scissors");
        computerScore += 1;
        console.log("Computer Scored ", computerScore);
    } else if (compChoice === "scissors" && humanInputToLowerCase === "paper") {
        console.log("Computer wins! Scissors beats Paper");
        computerScore += 1;
        console.log("Computer Scored ", computerScore);
    } else if (compChoice === "paper" && humanInputToLowerCase === "rock") {
        console.log("Computer wins! Paper beats Rock");
        computerScore += 1;
        console.log("Computer Scored ", computerScore);
    } 
    // Calculate scores and display
    let humanScoreTotal = humanScore;
    let computerScoreTotal = computerScore;
    console.log(`Human chose ${humanInputToLowerCase}`);
    console.log(`Computer chose ${compChoice}`);

    console.log("Humans: ",humanScoreTotal, " Computer: ", computerScoreTotal);
  
    if (i === 4) {
    if (humanScoreTotal > computerScoreTotal) {
        console.log(`Human won with ${humanScoreTotal} points`);
            } else if ((computerScoreTotal > humanScoreTotal)) {
                console.log(`Computer won with ${computerScoreTotal} points`);
            } else {
                console.log(`Drawn with ${computerScoreTotal} points`);
            }
    }   
  } 
 
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  } 
}
playGame();