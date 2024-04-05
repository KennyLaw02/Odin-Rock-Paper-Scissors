function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let compScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    // Check for draw
    const compChoice = document.getElementById("compChoice");
    compChoice.textContent = `Computer chose : ${computerSelection}!`;
    const roundResult = document.getElementById("roundResult");
    const playerScoreLi = document.getElementById("playerScore");
    const compScoreLi = document.getElementById("compScore");
    if (playerSelection === computerSelection) {
        roundResult.textContent = "Draw!";
        playerScoreLi.textContent = playerScore;
        compScoreLi.textContent = compScore;
        return;
    }
    let playerWon = false;
    switch (playerSelection) {
        case "rock":
            playerWon = computerSelection === "scissors";
            break;
        case "paper":
            playerWon = computerSelection === "rock";
            break;
        case "scissors":
            playerWon = computerSelection === "paper";
            break;
        default:
            break;
    }
    if (playerWon) {
        playerScore++;
        roundResult.textContent = "Player won this round!";
    } else {
        compScore++;
        roundResult.textContent = "Computer won this round!";
    }
    playerScoreLi.textContent = playerScore;
    compScoreLi.textContent = compScore;
    // Once a player reaches score of 5, announce their win
    if (playerScore === 5 || compScore === 5) {
        let winner = playerScore > compScore ? "Player" : "Computer";
        roundResult.textContent = `${winner} has won the game!\nSelect another choice to continue another game.`;
        playerScore = 0;
        compScore = 0;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});
