
/*Create function computerPlay()
 - Generate a random number from 1 - 3;
 - Use this random number to determine the computer's Action 
   (1 - ROCK, 2 - PAPER, 3- SCISSOR)
 - Return the selection as a STRING 
 - Assign computerSelection = computerPlay();*/
function computerPlay(){
 let selection = Math.floor(Math.random() * 4)
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
let computerSelection = computerPlay();

function playerPlay(){
    let selection = prompt("Let's play a game of Rock, Paper, Scissors!", "(Please input either Rock, Paper,or Scissors)");
    selection = selection.toLowerCase();
    if (selection == "rock"|| selection == "paper"|| Selection == "scissors")
    {
        return selection;
    }
    else 
        return alert("Invalid Selection");
}
let  playerSelection = playerPlay();

console.log(playerSelection);

console.log(computerSelection);

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock" && computerSelection =="rock")
    {
        alert("It's a tie. You both chose rock");
    }
    else if (playerSelection == "rock" && computerSelection =="paper")
    {
        alert("You lost. Paper beats rock.");
    } 
    else if (playerSelection == "rock" && computerSelection =="scissors")
    {
        alert("You won! Rock beats scissors.");
    }
    else if (playerSelection =="paper" && computerSelection =="rock")
    {
        alert("You won! Paper beats rock.");
    }
    else if (playerSelection =="paper" && computerSelection == "paper")
    {
        alert("Its a tie! You both chose paper");
    }
    else if (playerSelection =="paper" && computerSelection == "scissors")
    {
        alert("You lost! Scissors beats paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        alert("You lost! Rock beats scissors");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        alert("You won! Scissors beats paper");
    }
    else if (playerSelection =="scissors" && computerSelection == "scissors")
    {
        alert("It's a tie. You both chose scissors");
    }
    else
        alert("Invalid game");
}

playRound(playerSelection,computerSelection);

function game(){
    alert("We're gonna play 5 rounds of Rock, Paper, Scissors");
    for (let i = 0; i<5; i++)
    {
        
    }
}