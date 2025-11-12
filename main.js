// Rock Paper Scissors

// Variables to keep track of player scores
let playerScore = 0;
let computerScore = 0;
let tiedScore = 0;

// Select HTML elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultMessage = document.getElementById("resultMessage");

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tiedScoreDisplay = document.getElementById("tiedScoreDisplay");

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Main game function
function playRound(playerChoice) {
    console.log(`Player selected ${playerChoice}`)
    playerDisplay.textContent = `Human: ${playerChoice}`;
    const computerChoice = getComputerChoice();
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    const winner = checkWinner(playerChoice, computerChoice);
    updateScore(winner);
    updateMessage(winner, playerChoice, computerChoice);
}

// Function to generate computer random choice 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer selected ${computerChoice}`);
    return computerChoice; // return choices[computerChoice];
}

// Function checking who the winner is comparing choices
function checkWinner(player, computer) {
    if (player === computer) {
        return "tie";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// Function to update the scores
function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (winner === 'tie') {
        tiedScore++;
        tiedScoreDisplay.textContent = tiedScore;
    }
    checkGameOver();
}

// Function to update the display message
function updateMessage(winner, player, computer) {
    if (winner === 'tie') {
        resultMessage.textContent = `It is a tie, you both chose ${player}`;
    } else if (winner === 'player') {
        resultMessage.textContent = `Human won! ${player} beats ${computer}`;
    } else {
        resultMessage.textContent = `Human lost! ${computer} beats ${player}`;
    }
}

// Function to check if the game is over with first to 5 points
function checkGameOver() {
    if (playerScore >=5 || computerScore >= 5) {
        const gameOverMessage = playerScore >= 5 ? "Game over, human won!" : "Game over, computer won";
        resultMessage.textContent = gameOverMessage;
        // Disable buttons after the gane ends
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

    // Display results after each game
    // playerScoreDisplay.textContent = `Human: ${player}`;
    // computerDisplay.textContent = `Computer: ${computer}`;
    // resultMessage.textContent = result;

    // Allocate scores against results
    // resultDisplay.classList.remove("greenText", "redText")
    // switch(result) {
    //     case "You win!":
    //         resultDisplay.classList.add("greenText");
    //         playerScore++;
    //         playerScoreDisplay.textContent = playerScore;
    //         break;
    //     case "You lost":
    //         resultDisplay.classList.add("redText");
    //         computerScore++;
    //         computerScoreDisplay.textContent = computerScore;
    //         break;
    //     case "Tied!":
    //         tiedScore++;
    //         tiedScoreDisplay.textContent = tiedScore;
    //         break;
    // }



