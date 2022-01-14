let roundResult;
// let scorePlayer = 0;
// let scoreComp = 0;
let resultDiv = document.getElementById('result');
let playerScore = document.getElementById('playerScore');
let compScore = document.getElementById('compScore');
let playerWeapon = document.getElementById('playerWeapon');
let compWeapon = document.getElementById('compWeapon');

let rockBtn = document.getElementById('rock-btn').addEventListener('click', game);
let paperBtn = document.getElementById('paper-btn').addEventListener('click', game);
let scissorsBtn = document.getElementById('scissors-btn').addEventListener('click', game);

function game(e) {
    let playerSelection = e.target.title;
    let computerSelection = computerPlay();
    roundResult = playRound(playerSelection, computerSelection);

    // console.log(playerSelection == 'rock')
    // playerWeapon.src = 'img/rock.jpg';
    // console.log(playerWeapon.src)

    if (playerSelection == 'rock') {
        playerWeapon.src = 'img/rock.jpg';
    } else if (playerSelection == 'paper') {
        playerWeapon.src = 'img/paper.jpg';
    } else {
        playerWeapon.src = 'img/scissors.jpg';
    }

    if (computerSelection == 'rock') {
        compWeapon.src = 'img/rock.jpg';
    } else if (computerSelection == 'paper') {
        compWeapon.src = 'img/paper.jpg';
    } else {
        compWeapon.src = 'img/scissors.jpg';
    }

    if (roundResult == 1) {
        playerScore.textContent -= -1;
        resultDiv.textContent ="You win!\n" + capitalize(playerSelection) + " beats " + computerSelection + ".";
        playerWeapon.style.backgroundColor = 'green';
        compWeapon.style.backgroundColor = 'red';
        playerWeapon.style.transform = 'scale(1.1)';
        compWeapon.style.transform = 'scale(0.9)';
    } else if (roundResult == 0) {
        compScore.textContent -= -1;
        resultDiv.textContent ="You lose! " + capitalize( computerSelection) + " beats " + playerSelection + ".";
        playerWeapon.style.backgroundColor = 'red';
        compWeapon.style.backgroundColor = 'green';
        compWeapon.style.transform = 'scale(1.1)';
        playerWeapon.style.transform = 'scale(0.9)';
    } else {
        resultDiv.textContent ="It's a tie! Both chose " + playerSelection + ".";
        playerWeapon.style.backgroundColor = 'blue';
        compWeapon.style.backgroundColor = 'blue';
        playerWeapon.style.transform = 'scale(1)';
        compWeapon.style.transform = 'scale(1)';
    } 

    if (playerScore.textContent >= 5) {
        alert('You won!');
        resetGame();
    } else if (compScore.textContent >= 5) {
        alert('You lost!');
        resetGame();
    }
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

function resetGame() {
    playerScore.textContent = 0;
    compScore.textContent = 0;
    playerWeapon.src = 'img/q-mark.jpg';
    compWeapon.src = 'img/q-mark.jpg';
    playerWeapon.style.backgroundColor = '#f27a69';
    compWeapon.style.backgroundColor = '#f27a69';
    compWeapon.style.transform = 'scale(1)';
    playerWeapon.style.transform = 'scale(1)';
    resultDiv.textContent = '';
}