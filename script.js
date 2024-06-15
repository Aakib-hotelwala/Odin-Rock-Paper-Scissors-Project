function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "Rock";
    }else if(choice === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

let computerChoice = getComputerChoice();

let humanChoice = "";

function getHumanChoice(choice) {
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = "";

    if(humanChoice === computerChoice){
        result = "Tie!";
    }else if(
        (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper")
    ){
        result = "You won this round";
        humanScore++;
    }else{
        result = "Computer won this round";
        computerScore++;
    }

    document.querySelector("#result").innerText = `You chose: ${humanChoice}\t Computer chose: ${computerChoice}\nResult: ${result}`;
    document.querySelector("#Score").innerText = `Player: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5){
        document.querySelector("#result").innerText = "Congratulations! You won the game!";
    }else if(computerScore === 5){
        document.querySelector("#result").innerText = "The Computer won the game!";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector("#Score").innerText = `Player: ${humanScore} - Computer: ${computerScore}`;
    document.querySelector("#result").innerText = "";
}

document.querySelector("#Rock").addEventListener("click", () => {
    let humanChoice = "Rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

document.querySelector("#Paper").addEventListener("click", () => {
    let humanChoice = "Paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

document.querySelector("#Scissors").addEventListener("click", () => {
    let humanChoice = "Scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

document.querySelector("#reset").addEventListener("click", resetGame);