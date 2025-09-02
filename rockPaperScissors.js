/*None of this is applying to the game*/
let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

function playRound(humanMove, computerMove) {
    humanMove = prompt("Enter 'rock', 'paper', or 'scissors':");
    if (humanMove === null) {
        return "Try again!"
    }

    computerMove = choices[Math.floor(Math.random() * 3)];

    let result = "";
    let winMessage = "";

    if (humanMove === computerMove) {
        result = "It's a tie!";
        winMessage = "You both chose " + humanMove + ".";
    } else if (
        (humanMove === "rock" && computerMove === "scissors") ||
        (humanMove === "paper" && computerMove === "rock") ||
        (humanMove === "scissors" && computerMove === "paper")
    ) {
        result = "You Win!";
        winMessage = humanMove + " beats " + computerMove + ".";
        humanScore++;
    } else {
        result = "You Lose!";
        winMessage = computerMove + " beats" + humanMove + ".";
        computerScore++;
    }

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


/*This works as expected*/
function getHumanChoice() {
    const userInput = prompt("Let's play a game!:");
    const move = ("Player:" + " " + userInput);
    const play = move.toLowerCase();
    return play;
}
console.log(getHumanChoice())


function getComputerChoice() {
    
    const randomIndex = Math.floor(Math.random() * 3);

    const randomWord = "computer:" + " " + choices[randomIndex];

    return randomWord;
}

console.log(getComputerChoice())


