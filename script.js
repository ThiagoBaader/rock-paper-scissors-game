let humanScore = 0;
let computerScore = 0;
let gameOver = false;
let result = "";

function getHumanChoice () {
    const btnRock = document.querySelector("#btnRock");
    const btnPaper = document.querySelector("#btnPaper");
    const btnScissors = document.querySelector("#btnScissors");

    btnRock.addEventListener("click", () => playRound("rock"));
    btnPaper.addEventListener("click", () => playRound("paper"));
    btnScissors.addEventListener("click", () => playRound("scissors"));
}

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

function playRound(playerSelection) {
    if (gameOver) return;

    const humanChoice = playerSelection;
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        result = `It's a tie! Score: Human ${humanScore} - Computer ${computerScore} `;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        result = `You lose, ${computerChoice} beats ${humanChoice}! Score: Human ${humanScore} - Computer ${computerScore} `;
    } else {
        humanScore++;
        result = `You win, ${humanChoice} beats ${computerChoice}! Score: Human ${humanScore} - Computer ${computerScore} `;
    }

    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = result;

    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        showWinnerMessage();
        btnRestart();
    }
}

function showWinnerMessage() {
    const container = document.querySelector("#container");

    const content = document.createElement("div");
    content.classList.add("content");
    if (computerScore === 5) {
        content.textContent = "The computer is the winner!"
    } else {
        content.textContent = "You are the winner. Congratulations!"
    }

    container.appendChild(content);
    disableButtons();
}


function disableButtons() {
    document.querySelector("#btnRock").disabled = true;
    document.querySelector("#btnPaper").disabled = true;
    document.querySelector("#btnScissors").disabled = true;
}

function btnRestart() {
    const container = document.querySelector("#container");

    const btnRestart = document.createElement("button");
    btnRestart.id = "btnRestart";
    btnRestart.textContent = "Play again!";

    container.appendChild(btnRestart);

    btnRestart.addEventListener("click", () => restartGame());
}

function restartGame() {
    document.querySelector("#btnRock").disabled = false;
    document.querySelector("#btnPaper").disabled = false;
    document.querySelector("#btnScissors").disabled = false;

    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = "";

    const winnerMsg = document.querySelector(".content");
    if (winnerMsg) winnerMsg.remove();

    const btnRestart = document.querySelector("#btnRestart");
    btnRestart.remove();
}

getHumanChoice();