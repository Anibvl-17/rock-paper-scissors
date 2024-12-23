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
        updateResult("Draw! Both chose " + humanChoice);
        return;
    }

    // Case human chose Rock
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            updateResult("You lose! Paper beats Rock");
            return;
        }
        
        if (computerChoice === "scissors") {
            humanScore++;
            updateResult("You win! Scissors beats Rock");
            return;
        }
    }

    // Case human chose Paper
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            updateResult("You win! Paper beats Rock");
            return;
        }
        
        if (computerChoice === "scissors") {
            computerScore++;
            updateResult("You lose! Scissors beats Paper");
            return;
        }
    }

    // Case human chose scissors
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            updateResult("You win! Scissors beats Paper");
            return;
        }
        
        if (computerChoice === "rock") {
            computerScore++;
            updateResult("You lose! Rock beats Scissors");
            return;
        }
    }
}

function updateResult(message) {
    const container = document.querySelector(".result-display");
    const humanScoreElement = document.querySelector(".human-score");
    const computerScoreElement = document.querySelector(".computer-score");
    
    const result = document.createElement("p");
    result.textContent = message;
    container.appendChild(result);

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

if (humanScore === computerScore) {
    console.log("Whoa, a Draw!");
} else if (humanScore > computerScore) {
    console.log("Congratulations, you win!");
} else {
    console.log("Computer wins, try again!");
}