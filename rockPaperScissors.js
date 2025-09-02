console.log("Hello World!")

/*const a = "Rock"
const b = "Paper"
const c = "Scissors"

console.log(a)*/

function getComputerChoice() {
    return Math.floor(Math.random()*10) + 1;

}

let result = getComputerChoice();

console.log(result)

function getHumanChoice() {

}

const userMove = prompt("Choose: Rock, Paper, Scissors");
console.log(userMove)