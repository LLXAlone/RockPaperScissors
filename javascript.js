const initialSelection = prompt("Rock, paper, or scissors?", "");
const playerSelection = initialSelection.toLowerCase();
const computerSelection = getComputerChoice();


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
            return match;
        }

        else if (playerSelection === "scissors") {
            let match = ("The computer chooses " + computerSelection + ". You lost!")
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
            return match;
        }

        else if (playerSelection === "paper") {
            let match = ("The computer chooses " + computerSelection + ". You tied!")
            return match;
        }

        else if (playerSelection === "scissors") {
            let match = ("The computer chooses " + computerSelection + ". You win!")
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
            return match;
        }

        else if (playerSelection === "paper") {
            let match = ("The computer chooses " + computerSelection + ". You lost!")
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
