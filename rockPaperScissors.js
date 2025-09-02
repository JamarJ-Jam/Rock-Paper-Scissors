const words = ["Rock", "Paper", "Scissors"];

function get_random_word() {
    return Math.floor(Math.ramdom() * words.length);
}

const Move = words[get_random_word];





console.log(Move);



/*function getComputerChoice() {

}

let result = getComputerChoice();

console.log(result)

function getHumanChoice() {

}*/

const userMove = prompt("Make a move");

userMove.addEventListener('click', get_random_word);

/*console.log(userMove)*/