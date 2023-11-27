const choices = ["rock", "paper", "scissors"];
const winners = [];

//------------------------------------------------------------------------
function game(){
    let numberOfRounds = 5;
    for (let i = 1; i <= numberOfRounds; i++) {
        if(playRound(i) == true){
            numberOfRounds++;
        }
    }
    logWins();
}

//------------------------------------------------------------------------
function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)

    if(winner == "Tie"){
        return true;
    } else {
        return false;
    }
}

//-----------------------------------------------------------------------
function playerChoice(){
    let input = prompt("Type Rock, Paper, or Scissors")
    while(input == null){
        input = prompt("Type Rock, Paper, or Scissors")
    }
    input = input.toLowerCase()
    let check = validateInput(input);
    while(check == false){
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
        );
        while(input == null){
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input
}
//console.log(playerChoice())

//-----------------------------------------------------------------------
function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

//------------------------------------------------------------------------
function validateInput(choice){
    return choices.includes(choice);
}

//-------------------------------------------------------------------------
function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC){
        return 'Tie';
    } else if(
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'papel')
    ) {
        return 'Player';
    } else {
        return 'Computer'
    }
}

//------------------------------------------------------------------------
function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Ties: ", ties);
}

//------------------------------------------------------------------------
function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round: ", round);
    console.log("Player Chose: ", playerChoice);
    console.log("Computer Chose: ", computerChoice);

    if(winner !== "Tie"){
        console.log(winner, " Won the Round");
    } else {
        console.log("It's a Tie!")
    }

    console.log("----------------------------")
}

//------------------------------------------------------------------------
//game();