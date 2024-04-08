function getComputerChoice() {

    let array = ["Rock", "Paper", "Scissors"];
    let random =  Math.floor((Math.random()*array.length));
    return array[random];
}   

function playRound(playerSelection, computerSelection) {

    if (computerSelection == "Rock") {
        if (playerSelection === "rock") {
            let match = "The computer chooses " + computerSelection + ". You tied!"
            return match;
        }

        else if (playerSelection === "paper") {
            let match = ("The computer chooses " + computerSelection + ". You win!")
            win += 1;
            return match;
        }

        else if (playerSelection === "scissors") {
            let match = ("The computer chooses " + computerSelection + ". You lost!")
            lose += 1;
            return match;
        }

        else {
            let match = ("You didn't choose a proper answer!")
            return match;
        }
    }

    else if (computerSelection === "Paper"){
        if (playerSelection === "rock") {
            let match = "The computer chooses " + computerSelection + ". You lost!"
            lose += 1;
            return match;
        }

        else if (playerSelection === "paper") {
            let match = ("The computer chooses " + computerSelection + ". You tied!")
            return match;
        }

        else if (playerSelection === "scissors") {
            let match = ("The computer chooses " + computerSelection + ". You win!")
            win += 1;
            return match;
        }

        else {
            let match = ("You didn't choose a proper answer!")
            return match;
        }
    }

    else if (computerSelection === "Scissors"){
        if (playerSelection === "rock") {
            let match = "The computer chooses " + computerSelection + ". You win!"
            win += 1;
            return match;
        }

        else if (playerSelection === "paper") {
            let match = ("The computer chooses " + computerSelection + ". You lost!")
            lose += 1;
            return match;
        }

        else if (playerSelection === "scissors") {
            let match = ("The computer chooses " + computerSelection + ". You tied!")
            return match;
        }

        else {
            let match = ("You didn't choose a proper answer!")
            return match;
        }
    }

}

function playGame() {

    for (i = 1; i <= 5; i++) {
        initialSelection = prompt("Rock, paper, or scissors?", "");
        playerSelection = initialSelection.toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        computerSelection = getComputerChoice();
        initialSelection = undefined;
    }

    if (win > lose) {
        return "You won the game!";
    }

    else if (lose > win) {
        return "You lost the game!";
    }

    else {
        return "You have a tie game!";
    }

}

let win = 0; 
let lose = 0;
let initialSelection;
let playerSelection;
let computerSelection;