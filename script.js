let userScore =0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userval = document.querySelector("#user-scr");
const compval = document.querySelector("#comp-scr");


const showWinner= (userWin) =>{
    if(userWin){
        userScore++;
        userval.innerText = userScore;
        console.log("You win!!");
        msg.innerText = "You Win";
        
    }
    else{
        computerScore++;
        compval.innerText = computerScore;
        console.log("You Lose!!");
        msg.innerText ="You Lost";
    }
}
const draw = ()=>{
    console.log("Match is draw");
    msg.innerText= "Match is draw.. Play Again";

}

const genCompChoice = ()=>{
    const options = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const playgame = (userChoice)=>{
    console.log("user choice is", userChoice);
    const compChoice = genCompChoice(); 
    console.log("computer choice is", compChoice);

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "scissor" ?true:false;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin= compChoice === "paper" ?true:false;
        }
        showWinner(userWin);
    }
    
};
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playgame(userChoice);
    });
});
