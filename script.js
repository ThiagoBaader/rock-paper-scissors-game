//  Players score variables
let humanScore = 0;
let computerScore = 0;

// Get the computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    let choice;

    switch (randomIndex) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

// Get the human choice
function getHumanChoice() {
    let sign = prompt("Choose between rock, paper or scissors").toLowerCase();
    return sign;
}

// Logic to play the entire game
function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore} `);
}

playGame();
playGame();
playGame();
playGame();
playGame();