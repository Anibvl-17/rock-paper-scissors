let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".result-display");
const humanScoreElement = document.querySelector(".human-score");
const computerScoreElement = document.querySelector(".computer-score");

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
    }

    // Case human chose Rock
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            updateResult("You lose! Paper beats Rock");
        }
        
        if (computerChoice === "scissors") {
            humanScore++;
            updateResult("You win! Scissors beats Rock");
        }
    }

    // Case human chose Paper
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            updateResult("You win! Paper beats Rock");
        }
        
        if (computerChoice === "scissors") {
            computerScore++;
            updateResult("You lose! Scissors beats Paper");
        }
    }

    // Case human chose scissors
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            updateResult("You win! Scissors beats Paper");
        }
        
        if (computerChoice === "rock") {
            computerScore++;
            updateResult("You lose! Rock beats Scissors");
        }
    }
}

function updateResult(message) {
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
    
    const result = document.createElement("p");
    result.textContent = message;
    container.appendChild(result);

    if (humanScore === 5 || computerScore === 5) {
        const finalResult = document.createElement("p");
        finalResult.style.color = humanScore === 5 ? "green" : "red";
        finalResult.textContent = humanScore === 5 ? "You win!" : "You lose :(";
        container.appendChild(finalResult);
        document.getElementById("rock-btn").disabled = true;
        document.getElementById("paper-btn").disabled = true;
        document.getElementById("scissors-btn").disabled = true;
        document.getElementById("reset-btn").disabled = false;
    }
}

function resetGame() {
    container.textContent = "";
    humanScore = 0;
    computerScore = 0;
    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;
    document.getElementById("reset-btn").disabled = true;
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}