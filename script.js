
/*Create function computerPlay()
 - Generate a random number from 1 - 3;
 - Use this random number to determine the computer's Action 
   (1 - ROCK, 2 - PAPER, 3- SCISSOR)
 - Return the selection as a STRING 
 - Assign computerSelection = computerPlay();*/
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

function playerPlay(){
    let selection = prompt("Let's play a round of Rock, Paper, Scissors!", "(Please input either Rock, Paper,or Scissors)");
    selection = selection.toLowerCase();
    if (selection == "rock"|| selection == "paper"|| selection == "scissors")
    { 
        return selection;
    }
    else 
        alert("Invalid Selection");
        return 0;
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock" && computerSelection =="rock")
    {
        alert("It's a tie. You both chose rock");
        return 0;
    }
    else if (playerSelection == "rock" && computerSelection =="paper")
    {
        alert("You lost. Paper beats rock.");
        return 0;
    } 
    else if (playerSelection == "rock" && computerSelection =="scissors")
    {
        alert("You won! Rock beats scissors.");
        return 1;
    }
    else if (playerSelection == "paper" && computerSelection =="rock")
    {
        alert("You won! Paper beats rock.");
        return 1;
    }
    else if (playerSelection == "paper" && computerSelection == "paper")
    {
        alert("Its a tie! You both chose paper");
        return 0;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        alert("You lost! Scissors beats paper");
        return 0;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        alert("You lost! Rock beats scissors");
        return 0;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        alert("You won! Scissors beats paper");
        return 1;
    }
    else if (playerSelection =="scissors" && computerSelection == "scissors")
    {
        alert("It's a tie. You both chose scissors");
        return 0;
    }
    else
        alert("Invalid game");
        return 0;
}

function game(){
    alert("We're gonna play 5 rounds of Rock, Paper, Scissors");
    let winCounter = 0;
    for (let i = 0; i<5; i++)
    {
        let playerSelection;
        let computerSelection;
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        winCounter += playRound(playerSelection, computerSelection);

    }
    let output = 'You won ' + winCounter+ ' out of 5 rounds! Congrats!';
    alert(output);
}   

game();