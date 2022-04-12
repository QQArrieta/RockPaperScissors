
function computerPlay(){
 let selection = Math.floor((Math.random() * 3) + 1);
    switch(selection){
        case 1:
                return "rock";
                break;
        case 2: 
                return "paper";
                break;
        case 3: 
                return "scissors";
                break;
    }
}

function win(){
    playerWins += 1;
}
function loss(){
    computerWins+=1;
}
let playerWins = 0;
let computerWins = 0;
function playRound(e)
{
if (playerWins == 5){
    alert("You have won the game! You have won 5 rounds!");
    document.location.reload();
}
else if (computerWins == 5){
    alert("You have lost the game! Computer has one 5 games.");
    document.location.reload();
}
else{
    computerSelection= computerPlay();
    playerSelection= e.target.id;
  
    
    if (playerSelection == "rock" && computerSelection =="rock")
    {   
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "It's a tie! Both players chose rock";
        results.appendChild(content);
    }
    else if (playerSelection == "rock" && computerSelection =="paper")
    {
        loss();
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "You lost! Computer chose paper";
        results.appendChild(content);
        
        

    } 
    else if (playerSelection == "rock" && computerSelection =="scissors")
    {
        win();
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "You won! Computer chose scissors";
        results.appendChild(content);
        
    }
    else if (playerSelection == "paper" && computerSelection =="rock")
    {
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "You won! Computer chose rock";
        results.appendChild(content);
        win();
    }
    else if (playerSelection == "paper" && computerSelection == "paper")
    {
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "It's a tie! Computer chose paper";
        results.appendChild(content);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "You lost! Computer chose scissors";
        results.appendChild(content);
        loss();
    
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "You lost! Computer chose rock";
        results.appendChild(content);
        loss();
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        const results = document.querySelector('#results');
        const content = document.createElement('p');
        content.textContent = "You won! Computer chose paper";
        results.appendChild(content);
        win();
    }
    else if (playerSelection =="scissors" && computerSelection == "scissors")
    {
        const results = document.querySelector("#results");
        const content = document.createElement('p');
        content.textContent = "It's a tie! Computer chose scissors";
        results.appendChild(content);
    }
    const playerScore = document.querySelector('#playerScore');
    playerScore.textContent = `Player wins: ${playerWins}`;
    scoreBoard.appendChild(playerScore);
    const computerScore = document.querySelector('#computerScore');
    computerScore.textContent = `Computer wins: ${computerWins}`;
    scoreBoard.appendChild(computerScore);
}
}

document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissors").addEventListener("click", playRound);

