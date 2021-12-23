
game();

function game() {
    let playerSelection, computerSelection, result, winner;
    let scorePlayer = 0;
    let scoreComp = 0;
    for (i = 0; i < 5; i++) {
        playerSelection = capitalize(window.prompt("Game " + (i+1) + ": Enter Rock, Paper, or Scissors:"));
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection)

        if (result == 1) {
            scorePlayer += 1;
            console.log("Game " + (i+1) + ": You win! " + playerSelection + " beats " + computerSelection);
        } else if (result == 0) {
            scoreComp += 1;
            console.log("Game " + (i+1) + ": You lose! " + computerSelection + " beats " + playerSelection);
        } else {
            console.log("Game " + (i+1) + ": It's a tie! Both chose " + playerSelection);
        } 
    }
    if (scorePlayer > scoreComp) {
        winner = "The Player";
        result = scorePlayer
    } else if (scorePlayer == scoreComp) {
        winner = "tie"
        result = scorePlayer
    } else {
        winner = "The Computer"
        result = scoreComp;
    }

    if (winner == "tie") {
        console.log("No one wins! Tie game.")
    } else {
        console.log(winner + " wins! They won " + result + "/5 games.")
    }
}

function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum == 2) {
        return "Rock"
    } else if (randomNum == 1) {
        return "Paper"
    } else if (randomNum == 0) {
        return "Scissors"
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
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return 1;
    } else if (playerSelection == computerSelection) {
        return null;
    } else {
        return 0;
    } 
}