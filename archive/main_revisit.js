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
const resetBtn = document.getElementById("resetBtn");
const gameOver = document.getElementById("gameOver");

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
resetBtn.addEventListener('click', () => resetGame());

// Main game function
function playRound(playerChoice) {
    playerDisplay.textContent = `Player: ${playerChoice}`;
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
        resultMessage.textContent = `Player won! ${player} beats ${computer}`;
    } else {
        resultMessage.textContent = `Computer won! ${computer} beats ${player}`;
    }
}

// Function to check if the game is over with first to 5 points
function checkGameOver() {
    if (playerScore >=5 || computerScore >= 5) {
        const gameOverMessage = playerScore >= 5 ? 'Game over, player won!' : 'Game over, computer won';
        gameOver.textContent = gameOverMessage;
        resetBtn.textContent = "Play Again?";
        // Disable buttons after the game ends
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;      
    }
}

// Function to reset game
function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    tiedScore = 0;

    // Update score displays
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    tiedScoreDisplay.textContent = tiedScore;

    // Clear choice displays
    playerDisplay.textContent = "Player: ";
    computerDisplay.textContent = "Computer: ";

    // Clear result message
    resultMessage.textContent = "Choose your weapon";

    // Clear game over message
    if (gameOver) {
        gameOver.textContent = "";
    }

    // Re-enable the choice buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    // Change button text back to Play Again
    resetBtn.textContent = "Play Again";
}

