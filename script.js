let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    
    // Case: Draw, both choices are equal
    if (humanChoice === computerChoice) {
        console.log("Draw! Both chose " + humanChoice);
        return;
    }

    // Case human chose Rock
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
            return;
        }
        
        if (computerChoice === "scissors") {
            console.log("You win! Scissors beats Rock");
            humanScore++;
            return;
        }
    }

    // Case human chose Paper
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
            return;
        }
        
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
            return;
        }
    }

    // Case human chose scissors
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
            return;
        }
        
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
            return;
        }
    }
}

if (humanScore === computerScore) {
    console.log("Whoa, a Draw!");
} else if (humanScore > computerScore) {
    console.log("Congratulations, you win!");
} else {
    console.log("Computer wins, try again!");
}