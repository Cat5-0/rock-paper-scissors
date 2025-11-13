// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tiedScoreDisplay = document.getElementById("tiedScoreDisplay");
const resetGame = document.getElementById("resetGame");
let playerScore = 0;
let computerScore = 0;
let tiedScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // CHecking who the winner is comparing choices
    if (playerChoice === computerChoice) {
        result = "Tied!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lost";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lost";
                break;
            case "scissors":
            result = (computerChoice === "paper") ? "You win!" : "You lost";
            break;    
        }
    }
    //Calculate first to reach 5 games and win
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === computerScore) {
            resultDisplay.textContent = ("Game over Tied");
            resetGame();
            return;
        } else if (playerScore > computerScore) {
            resultDisplay.textContent = ("Game over Human won");
            resetGame();
            return;
        } else {
            resultDisplay.textContent = ("Game over Computer won");
            resetGame();
            return;
        }
    }


    // Display results after each game
    playerDisplay.textContent = `Human: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Allocate scores against results
    resultDisplay.classList.remove("greenText", "redText")
    switch(result) {
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lost":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "Tied!":
            tiedScore++;
            tiedScoreDisplay.textContent = tiedScore;
            break;
    }

function resetGame() {
    console.log("Game is over");
    
}
}
