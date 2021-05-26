//XKCD random!
function computerPlay()
{
    return "Rock";
}


//arguments can only be Rock, Paper, Scissors
function playRound(playerSelection, computerSelection)
{
    //this is how TOP suggested i do things
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == computerSelection)
    {
        return "You tied the computer!";
    }
    else if((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock"))
    {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else
    {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));