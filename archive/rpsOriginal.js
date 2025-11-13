// Function playGame 
function playGame() {

// Declare variables for keeping scores
let humanScore = 0;
let computerScore = 0;
let total = 0;

// Array of choices for computer random selection
const choices = ["rock", "paper", "scissors"];
    
// Loop to play game set number of times
for (let i = 1; i <= 5; i++) {
    playRound();
} 

// Function play round and sum score totals
function playRound() {
    const playerSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(`Human score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
    console.log(`Winner is ${winner}`);
    total += 1;
    console.log("     <----  ---->");
    if (total === 5) {
        if (humanScore === computerScore) {
            console.log(`Game is a Tie ${humanScore} and ${computerScore}`);
        } else if (humanScore > computerScore) {
            console.log(`Human with ${humanScore} beat Computer with ${computerScore}`);
        } else {
            console.log(`Computer with ${computerScore} beat Human with ${humanScore}`);
        }
    }
}
<<<<<<< HEAD:script.js

// Prompt for user to enter their choice
function getHumanChoice() {
    let humanInput = prompt("Please enter Rock, Paper or Scissors:");
    humanInput = humanInput.toLowerCase();
    console.log(`Human selected ${humanInput}`);
    return humanInput;
}
  
// Function for computer random choice 
function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer selected ${computerChoice}`);
    return computerChoice;
}

// Check which player has won
function checkWinner(choiceH, choiceC) {
    if (choiceH === choiceC) {
        return "Tie";
    } else if (
        (choiceH === "rock" && choiceC === "scissors") ||
        (choiceH === "paper" && choiceC === "rock") ||
        (choiceH === "scissors" && choiceC === "paper")
    ) {
        humanScore += 1;
        return "Human";
    } else {
        computerScore += 1;
        return "Computer";
    }
}
}

playGame();
=======
playGame();
>>>>>>> rps-ui:archive/rpsOriginal.js
