const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const userInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter Rock, Paper, or Scissors.").toLowerCase();
    }
    return userInput;
}

function getComputerChoice() {
    
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log('Player chose: ${humanChoice}');
    console.log('Computer chose: ${computerChoice}');

    if (humanChoice === computerChoice) {
        console.log("it's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }

    console.log("Current Score: Player: " + humanScore | "Computer: " + computerScore);
    console.log("------------------------");
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You won the match!");
    } else if (computerScore > humanScore) {
        console.log("You lost the match.");
    } else {
        console.log("The match was a draw.");
    }
}

game()

/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);*/







/*let result = "";
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
    }*/
