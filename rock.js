let userScore=0
let compScore=0

const choices = document.querySelectorAll(".choice") 
const msg = document.querySelector ("#msg");

const userScore_span = document.querySelector("#user-score");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); 
    return options[randIdx];
};

const drawGame = () => {
    console.log("its a draw!");
    msg.innerText = "its a draw! play again";
    // msg.style.backgroundColor = "gray";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log ("you lose!");
        msg.innerText = `you lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {
    console.log ("user choice is:", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is:", compChoice);


    if (userChoice === compChoice) {

        drawGame()
    }else{
     let userWin = true;
     if (userChoice === "rock"){

        userWin = compChoice === "paper" ? false:true;
     }else if (userChoice === "paper"){

        userWin=compChoice === "scissors" ? false:true;
     }else{

        userWin=compChoice === "rock" ? false:true;
     }
     showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=> {
        const choiceId = choice.getAttribute("id")
        // console.log("choice was clicked",choiceId);
        playgame (choiceId);
    });
});