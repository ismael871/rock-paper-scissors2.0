let choices = ["rock", "paper", "scissors"];

//---------------------------------------------------------

function getCompChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    
    if(choice === 1){
        return "rock"
    } else if(choice === 2){
        return "paper"
    } else {
        return "scissors"
    }
}

//console.log(getCompChoice());

//-------------------------------------------------------------

function getPlayerChoice2(){
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null || input == ""){
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
        );
        while(input == null || input == ""){
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input
}

//console.log(getPlayerChoice());

//-----------------------------------------------------------------

function round(roundNumber){
    let cChoice = getCompChoice();
    let pChoice = getPlayerChoice2();
    let winner = checkWinner(pChoice, cChoice);
    logRound(pChoice, cChoice, roundNumber);
    return winner;
}

//console.log(round());

//-------------------------------------------------------------------

function validateInput(choice) {
    return choices.includes(choice)
}

//-----------------------------------------------------------------

function checkWinner(choiceP, choiceC){
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

//--------------------------------------------------------------------

function logRound(choiceP, choiceC, round){
    if(choiceP === choiceC){
        console.log(`Round ${round + 1} Es un empate! Los dos eligieron ${choiceC}`)
    } else if(
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'papel')
    ) {
        console.log(`Round: ${round + 1} Ganaste! ${choiceP} le gana a ${choiceC}`)
    } else {
        console.log(`Round ${round + 1} Perdiste! ${choiceC} le gana a ${choiceP}`)
    }
}

//---------------------------------------------------------------------

function game(){
    let vueltas = 5;
    let pWins = 0;
    let cWins = 0;

    for (let i = 0; i < vueltas; i++) {
        let winner = round(i);
        
        if(winner == "Tie") {
            vueltas++;
        } else if(winner == "Player"){
            pWins++;
        } else {
            cWins++;
        }
    }

    if(pWins > cWins){
        console.log("----------------------------------------")
        console.log(`JUEGO GANADO! tu puntaje es ${pWins} y el de la computadora es ${cWins}`)
    } else {
        console.log("----------------------------------------")
        console.log(`JUEGO PERDIDO :( tu puntaje es ${pWins} y el de la computadora es ${cWins}`)
    }
}

game();