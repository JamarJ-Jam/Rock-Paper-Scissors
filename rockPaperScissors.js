function getHumanChoice() {
    const userInput = prompt("Let's play a game!:");
    const move = ("userInput:", userInput)
    return move
}
console.log(getHumanChoice())


function getComputerChoice() {
    const words = ['rock', 'paper', 'scissors']

    const randomIndex = Math.floor(Math.random() * 3);

    const randomWord = words[randomIndex];

    return randomWord;
}

console.log(getComputerChoice())

let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

function playRound(humanChoice, computerChoice) {
    const humanChoice = prompt("Enter 'rock', 'paper', or 'scissors':");
    if (humanChoice === null) {
        return "Try again!"
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    let winMessage = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
        winMessage = "You both chose " + humanChoice + ".";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        winMessage = humanChoice + " beats " + computerChoice + ".";
        humanScore++;
    } else {
        result = "You Lose!";
        winMessage = computerChoice + " beats" + humanChoice + ".";
        computerScore++;
    }

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
