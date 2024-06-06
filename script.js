function getComputerChoice(){

    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice == 0){
        return "Rock";
    }else if(computerChoice == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = (prompt("Enter your choice: "));

    while(humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors"){
        humanChoice = (prompt("Invalid input, Enter your choice again : "));
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
        console.log("Player won");
        humanScore += 1;
    }else if((humanChoice == "Scissors" && computerChoice == "Rock") || (humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors")){
        console.log("Computer won");
        computerScore += 1;
    }else{
        console.log("Tie");
    }
}

function playGame(){
    while(humanScore < 5 && computerScore < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Computer choice ${computerChoice}`);
        console.log(`Human choice ${humanChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Player score : ${humanScore} \nComputer score : ${computerScore}`);
    }

    if(humanScore == 5){
        console.log("You won");
    }else{
        console.log("You lost")
    }
}

playGame();