function getHumanChoice() {
    const userInput = prompt("Let's play a game!:");
    const result = ("userInput:", userInput)
    return result
}
console.log(getHumanChoice())


function getComputerChoice() {
    const words = ["rock", "paper", "scissors"]

    const randomIndex = Math.floor(Math.random() * 3);

    const randomWord = words[randomIndex];

    return randomWord;
}

console.log(getComputerChoice())


