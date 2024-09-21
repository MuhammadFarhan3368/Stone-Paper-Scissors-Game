let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

let genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

let drawGame = (compChoice) => {
    console.log("Game was draw")
    msg.innerText = `Game was draw. Computer choose ${compChoice}`
    msgContainer.style.backgroundColor = " rgb(7, 7, 32)"
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    let compChoice = genCompChoice();
    console.log("compChoice = ", compChoice);

    showWinnner = (userWin, userChoice, compChoice) => {
        if(userWin){
            msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
            msgContainer.style.backgroundColor = "green"
            userScore++
            userScorePara.innerText = userScore;
        }
        else{
            msg.innerText = `You Lose.  ${compChoice} beats ${userChoice}`
            msgContainer.style.backgroundColor = "red";
            compScore++
            compScorePara.innerText = compScore;
        }
    }

    if(userChoice === compChoice){
        drawGame(compChoice)
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinnner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
});