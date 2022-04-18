
function computerPlay(){
 let chosen = Math.floor((Math.random() * 3) + 1);
    switch(chosen){
        case 1:
                document.getElementById("computerRock").classList.toggle("selected");
                setTimeout(function (){document.getElementById("computerRock").classList.remove("selected")}, 700);
                return "rock";
                break;
        case 2: 
            
                document.getElementById("computerPaper").classList.toggle("selected");
                setTimeout(function (){document.getElementById("computerPaper").classList.remove("selected")}, 700);
                return "paper";
                
                break;
        case 3: 
                document.getElementById("computerScissors").classList.toggle("selected");
                setTimeout(function(){document.getElementById("computerScissors").classList.remove("selected")}, 700);
                return "scissors";
                
                break;
    }
}


function playRound(selection)
{
    computerSelection=computerPlay();
    

    if (selection == "rock" && computerSelection =="rock")
    {
       document.querySelector(".combatLogText").textContent = "I'ts a tie, you both chose rock!";
    }
    else if (selection =="rock" && computerSelection == "paper")
    {
        loss++;
        document.querySelector(".combatLogText").textContent = "You lost. Computer chose paper!";
        document.querySelector(".computerScore").textContent = `${loss}`;
        return loss;
    }
    else if (selection == "rock" && computerSelection == "scissors")
    {
        win++;
        document.querySelector(".combatLogText").textContent = "You won! Computer chose scissors!";
        document.querySelector(".playerScore").textContent = `${win}`;
        return win;
    }
    else if (selection == "paper" && computerSelection == "rock")
    {
        win++;
        document.querySelector(".combatLogText").textContent = "You won! Computer chose rock!";
        document.querySelector(".playerScore").textContent = `${win}`;
        return win;
    }
    else if (selection == "paper" && computerSelection == "paper")
    {
        document.querySelector(".combatLogText").textContent = "I'ts a tie, you both chose paper!";
    }
    else if (selection == "paper" && computerSelection == "scissors")
    {
        loss++;
        document.querySelector(".combatLogText").textContent = "You lost. Computer chose scissors!";
        document.querySelector(".computerScore").textContent = `${loss}`;
        return loss;
    }
    else if (selection == "scissors" && computerSelection == "rock")
    {
        loss++;
        document.querySelector(".combatLogText").textContent = "You lost. Computer chose rock!";
        document.querySelector(".computerScore").textContent = `${loss}`;
        return loss;
    }
    else if (selection == "scissors" && computerSelection == "paper")
    {
        win++;
        document.querySelector(".combatLogText").textContent = "You won! Computer chose paper!";
        document.querySelector(".playerScore").textContent = `${win}`;
        return win;
    }
    else if (selection == "scissors" && computerSelection == "scissors")
    {
        document.querySelector(".combatLogText").textContent = "It's a tie, you both chose scissors!";
    }
    
}
let win = 0;
let loss = 0;

document.images[0].onclick = () => playRound("rock");
document.images[1].onclick = () => playRound("paper");
document.images[2].onclick = () => playRound("scissors");

