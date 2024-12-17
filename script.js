console.log("Welcome!");

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber > 0 && randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber <=0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice;
    let wrongInput;

    do {
        choice = String(prompt("Write rock, paper or scissors to play!")).toLowerCase();
        wrongInput = false;
        if (choice === "rock") {
            return "rock";
        } else if (choice === "paper") {
            return "paper";
        } else if (choice === "scissors"){
            return "scissors";
        } else {
            wrongInput = true;
            alert("Wrong input, try again");
        }
    } while(wrongInput)
}