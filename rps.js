let roundResult;
let scorePlayer = 0;
let scoreComp = 0;
let resultDiv = document.getElementById('result');
let scoreBoard = document.getElementById('score')

let rockBtn = document.getElementById('rock-btn').addEventListener('click', game);
let paperBtn = document.getElementById('paper-btn').addEventListener('click', game);
let scissorsBtn = document.getElementById('scissors-btn').addEventListener('click', game);

function game(e) {
    let playerSelection = e.target.title;
    let computerSelection = computerPlay();
    roundResult = playRound(playerSelection, computerSelection);

    if (roundResult == 1) {
        scorePlayer += 1;
        resultDiv.textContent ="You win!\n" + playerSelection + " beats " + computerSelection;
    } else if (roundResult == 0) {
        scoreComp += 1;
        resultDiv.textContent ="You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        resultDiv.textContent ="It's a tie! Both chose " + playerSelection;
    } 
    scoreBoard.textContent = scorePlayer + ' - ' + scoreComp
}

function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum == 2) {
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    } else if (randomNum == 0) {
        return "scissors"
    } else {
        console.log("Error within computerPlay function.")
    }
}

function capitalize(para){
    para = para.toLowerCase();
    let temp = para.charAt(0);
    temp = temp.toUpperCase();
    para = para.replace(para.charAt(0), temp); 
    return para;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return 1;
    } else if (playerSelection == computerSelection) {
        return null;
    } else {
        return 0;
    } 
}