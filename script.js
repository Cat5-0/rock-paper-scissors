  console.log("Hello Madelaine");

  let humanChoice = prompt("Please enter Rock, Paper or Scissors:  ");

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log("Generated", randomNumber);



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


  function getHumanChoice() {
    if (humanChoice === "Rock") {
        humanNumber = 1;
        console.log("Rock");
        console.log(humanNumber);
    } else if (humanChoice === "Paper") {
        humanNumber = 2;
        console.log("Paper");
    } else if (humanChoice === "Scissors") {
        humanNumber = 3;
        console.log("Scissors");
    }
  }
  getHumanChoice();

