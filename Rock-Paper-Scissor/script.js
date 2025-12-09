// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissor = document.getElementById('scissor');

// let computerPick = ["rock", "paper", "scissor"];

// function playGame(userChoice){
//     const randomChoice = computerPick[Math.floor(Math.random() * computerPick.length)];

//     document.getElementById('myH1').textContent = `Computers Choice: ${randomChoice}`;

//     let result = "";

//     if (userChoice === randomChoice) {
//         result = "It's a draw";
//     }
//     else if (
//         (userChoice === "rock" && randomChoice === "scissor") ||
//         (userChoice === "paper" && randomChoice === "rock") ||
//         (userChoice === "scissor" && randomChoice === "paper")
//     ) {
//         result = "You won";
//     }
//     else {
//         result = "You lose";
//     }

//     document.getElementById('result').textContent = result;
// }

// rock.addEventListener("click",()=> playGame("rock"));
// paper.addEventListener("click",()=> playGame("paper"));
// scissor.addEventListener("click",()=> playGame("scissor"));


// const choices = ["rock", "paper", "scissor"];

// function playGame(userChoice) {
//   const comp = choices[Math.floor(Math.random()*3)];
//   document.getElementById("myH1").textContent = `Computers Choice: ${comp}`;

//   const result =
//     userChoice === comp ? "It's a draw" :
//     (userChoice === "rock" && comp === "scissor") ||
//     (userChoice === "paper" && comp === "rock") ||
//     (userChoice === "scissor" && comp === "paper")
//     ? "You won" : "You lose";

//   document.getElementById("result").textContent = result;
// }

// ["rock","paper","scissor"].forEach(id =>
//   document.getElementById(id).onclick = () => playGame(id)
// );


// one liner

// ["rock","paper","scissor"].forEach(i=>document.getElementById(i).onclick=()=>{const c=["rock","paper","scissor"][Math.floor(Math.random()*3)];document.getElementById("myH1").textContent=`Computers Choice: ${c}`;document.getElementById("result").textContent=i===c?"It's a draw":(i==="rock"&&c==="scissor")||(i==="paper"&&c==="rock")||(i==="scissor"&&c==="paper")?"You won":"You lose";});

