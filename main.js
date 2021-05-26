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
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock"))
    {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else
    {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function determineWinner(playerWins, computerWins)
{
    if(playerWins>computerWins)
    {
        return "You have defeated the computer. " + playerWins + " to " + computerWins;
    }
    else if(computerWins > playerWins)
    {
        return "Predictably, the computer has defeated you " + computerWins + " to " + playerWins;
    }
    else
    {
        return "The stars have aligned. You have met your true equal adversary. Tie ballgame."
    }
}

function testRPS()
{
    const playerSelection = "scissors";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0 ; i<5 ; i++)
    {
        let playerSelection = prompt("Choose rock, paper, or scissors.");
        let roundResult = playRound(playerSelection, computerPlay());
        console.log(roundResult);
        //bein' lazy
        if(roundResult.includes("win"))
        {
            playerWins++;
        }
        else if(roundResult.includes("lose"))
        {
            computerWins++;
        }
        else 
        {
            //it was a tie, we assume and we aren't even counting those right now
        }
    }
    //finally determine the winner
    console.log(determineWinner(playerWins,computerWins));

}

//actually run the game loop
game();