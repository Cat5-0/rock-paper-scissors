The Odin Project Rock Paper Scissors

Pseudocode

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
Play a single round
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

___________
2. In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

  1. For now, remove the logic that plays exactly five rounds.
  
  2.  Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
  3. Add a div for displaying results and change all of your console.logs into DOM methods.
  4. Display the running score, and announce a winner of the game once one player reaches 5 points.
  5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
  Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.

3. Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.

4. Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch......

5. Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson.
