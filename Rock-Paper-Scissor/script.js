const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let computerPick = ["rock", "paper", "scissor"];

function playGame(userChoice){
    const randomChoice = computerPick[Math.floor(Math.random()* computerPick.length)]

    document.getElementById('myH1').textContent = `Computers Choice: ${randomChoice}`;

    let result = "";

    if(userChoice === randomChoice){
        result = "Its a draw";

    }

    else if(
        (userChoice === "rock" && randomChoice === "paper") ||
        (userChoice === "paper" && randomChoice === "rock") ||
        (userChoice === "scissor" && randomChoice === "paper")
    ){
        result = "You won";

    }

    else{
        result = "You lose";
    }

    document.getElementById('result').textContent = result;

}

rock.addEventListener("click",()=> playGame("rock"));
paper.addEventListener("click",()=> playGame("paper"));
scissor.addEventListener("click",()=> playGame("scissor"));