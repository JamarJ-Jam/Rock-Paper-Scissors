/*const words = ["rock", "paper", "scissors"]

const randomIndex = Math.floor(Math.random() * 3);

const randomWord = words[randomIndex]*/

function getComputerChoice() {
    const words = ["rock", "paper", "scissors"]

    const randomIndex = Math.floor(Math.random() * 3);

    const randomWord = words[randomIndex];

    return randomWord;
}

console.log(getComputerChoice())

function getHumanChoice() {
    const startButton = document.querySelector("#startbutton");
    const choice = document.querySelector.Selector("#choice");

    startButton
}