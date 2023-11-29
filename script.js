const choices = ["rock", "paper", "scissors"];
let winners = [];

//--------------------------------------------------------------------------------
function resetGame(){
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerSelection").textContent = "";
    document.querySelector(".computerSelection").textContent = "";
    document.querySelector(".reset").style.display = "none";
}

//--------------------------------------------------------------------------------
function game(){
    let btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => 
        btn.addEventListener("click", () => {
            if(btn.id){
                playRound(btn.id);
            }
        }))
}

//--------------------------------------------------------------------------------
function playRound(playerSelection){
    let wins = checkWins();
    if(wins >= 5){
        return;
    }
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    tallyWins();
    displayRound(playerSelection, computerSelection, winner); 
    wins = checkWins();
    if(wins == 5){
        displayEnd();
    }
}

//--------------------------------------------------------------------------------
function displayEnd(){
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5){
        document.querySelector(".winner").textContent = "You Won 5 games, Congrats!"
    } else {
        document.querySelector(".winner").textContent = "Sorry, the computer won 5 times"
    }
    document.querySelector(".reset").style.display = "flex";
}

//---------------------------------------------------------------------------------
function displayRound(playerSelection, computerSelection, winner){
    document.querySelector(".playerSelection").textContent = "You chose: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    document.querySelector(".computerSelection").textContent = "The computer chose: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);    
    displayRoundWinner(winner);
    
}

//----------------------------------------------------------------------------------
function displayRoundWinner(winner){
    if(winner == "Player"){
        document.querySelector(".winner").textContent = "You won the round!"
    } else if(winner == "Computer"){
        document.querySelector(".winner").textContent = "The computer won the round"
    } else {
        document.querySelector(".winner").textContent = "The round was a tie"
    }
}

//-----------------------------------------------------------------------------------
function tallyWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;
}

//--------------------------------------------------------------------------------
function computerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("active")
    }, 700);

    return choice;
}

//---------------------------------------------------------------------------------
function checkWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins);
}

//--------------------------------------------------------------------------------
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
game();