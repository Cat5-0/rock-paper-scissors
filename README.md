# rock-paper-scissors
As per project specifications input needs to be exact words, case is irrelevant.
You can remove line 4 from index.html that removes the favicon.ico
To run the JavaScript code from the index.html file in the browser's console
Open the browser's Developer Console

Pseudocode Input
A program that creates a game played entirely in the console:
    1 Game played against the computer.
    2 Step 1 Setup Project Structure
      A function that randomly returns "rock", "paper" or "scissors".

    3 Step 2 Create a new function named getComputerChoice
    4 getComputerChoice will randomly return "rock", "paper" or "scissors".
      (Hint Math.random to conditionally return one of the multiple choices).
    5 Test function returns expected results using console.log

    6 Step 3 Write the logic to get human choice
    7 Create a new function named getHumanChoice
    8 getHumanChoice to return one of the valid choices depending on user input
      (Hint use the prompt method to get user input, assume user always enters valid input)
    9 Test function returns expected results using console.log

    10 Step 4 Declare the players score variables to keep track of scores
    11 Create variable humanScore in the global scope
    12 Create variable computerScore in the global scope
    13 Initialize these variables with the value 0

    14 Step 5 Write the logic to play a single round
    15 Create a function to take human and computer choices as arguments 
    16 Play a single round
    17 Increments the round winner's score
    18 Logs a winner announcement

    19 Step 6 Write the logic to play the entire game
    20 Create a function playGame that calls playRound to play 5 rounds
    21 Keep track of scores and declares winner at end

Pseudocode Output
Calculate random number range 1 to 3
Create function getComputerChoice
IF randomNumber is 1 console.log "Rock"
IF randomNumber is 2 console.log "Paper"
IF randomNumber is 3 console.log "Scissors"
Console.log tests that working correctly
Create function getHumanChoice
getHumanChoice to return valid choice
Console.log tests that working correctly
Declare humanScore and initialize to 0
Declare computerScore and initialize to 0
//Play a single round
Create Function playRound
Define parameters humanChoice and computerChoice for playRound 

Parameters to take human and computer choices as arguments
Make humanChoice parameter case-insensitive
write code for playRound to console.log a string value for round winner
"You lose! Paper beats Rock"
Increment humanScore or computerScore variable based on the round winner

Create new function playGame
Move playRound function to be declared inside new playGame function
Move human score variable to be declared in playGame function 
Move computer score variable to be declared in playGame function 
Play 5 rounds calling playRound 5 times



