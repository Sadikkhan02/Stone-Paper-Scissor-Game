let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let you = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];     
}

const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game Was Draw!";
    msg.style.backgroundColor = "purple";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        console.log(userScore);
        msg.innerText = `Win! You Chose ${userChoice}, comp chose ${compChoice}`; 
        msg.style.backgroundColor = "Green";
        you.innerText = userScore;
        console.log("You Win!");
    }
    else{
        compScore++;
        console.log(compScore);
        console.log("You Lose!");
        msg.innerText = `Lose! You Chose ${userChoice}, comp chose ${compChoice}`;
        comp.innerText = compScore;
        msg.style.backgroundColor = "Red";
    }
}

let playGame  = (userChoice) =>{
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock" ){
            userWin = compChoice === "paper" ? false :  true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});