let wins=0;
let ties=0;
let losses=0;

let emoji={'Rock': '🗿', 'Paper':'📝','Scissors':'✂️','Default':'❓'};

const getcompchoice = () => ['Rock','Paper','Scissors'][Math.floor(Math.random()*3)];//math.random returns [0,1) so index 3 not possible
const gameover = () =>wins==5||losses==5?true:false;
document.querySelectorAll('.choice button').forEach(button => {
  button.addEventListener('click', () => {
    const playerchoice = button.className;
    playround(getcompchoice(),playerchoice);
  });
});

function playround(compchoice,playerchoice)
{
    if(compchoice==playerchoice)
    {
        document.querySelector(".win_loss").textContent = "Tie!";
        document.querySelector(".why").textContent = `${playerchoice} ties with ${compchoice}. Nothing more Nothing less`;
        document.querySelector(".Ties").textContent = "Current Ties:"+ ++ties;
        document.querySelector(".Player_text").textContent = `Player Chose:${playerchoice}`;
        document.querySelector(".Computer_text").textContent = `Computer Chose:${compchoice}`;
        document.querySelector(".Computer_Logo").textContent = emoji[compchoice];
        document.querySelector(".Player_Logo").textContent = emoji[playerchoice];
    }

    if(playerchoice=='Rock' && compchoice =='Paper'||playerchoice=='Paper' && compchoice =='Scissors'||playerchoice=='Scissors' && compchoice =='Rock')
    {
        document.querySelector(".win_loss").textContent = "You Lost to a Computer! How Stupid!!";
        document.querySelector(".why").textContent = `${compchoice} beats ${playerchoice} unfortunately. HAHAHA TRY AGAIN`;
        document.querySelector(".Losses").textContent = "Current Losses:"+ ++losses;
        document.querySelector(".Player_text").textContent = `Player Chose:${playerchoice}`;
        document.querySelector(".Computer_text").textContent = `Computer Chose:${compchoice}`;
        document.querySelector(".Computer_Logo").textContent = emoji[compchoice];
        document.querySelector(".Player_Logo").textContent = emoji[playerchoice];
    }

    if(playerchoice=='Paper' && compchoice =='Rock'||playerchoice=='Scissors' && compchoice =='Paper'||playerchoice=='Rock' && compchoice =='Scissors')
    {
        document.querySelector(".win_loss").textContent = "You Won! Tchhhh How lucky!!";
        document.querySelector(".why").textContent = `${playerchoice} beats ${compchoice}. You wont get lucky like that again.`;
        document.querySelector(".Wins").textContent = "Current Wins:"+ ++wins;
        document.querySelector(".Player_text").textContent = `Player Chose:${playerchoice}`;
        document.querySelector(".Computer_text").textContent = `Computer Chose:${compchoice}`;
        document.querySelector(".Computer_Logo").textContent = emoji[compchoice];
        document.querySelector(".Player_Logo").textContent = emoji[playerchoice];
    }
    if(gameover())
    {
        if(wins==5)
        {
            document.querySelector(".win_loss").textContent = "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
            document.querySelector(".why").textContent = `HOW HAS THIS HAPPENED I HAVE FAILED MY CREATOR`;
        }
        else
        {
            document.querySelector(".win_loss").textContent = "LOSER!LOSER!LOSER!LOSER!LOSER!";
            document.querySelector(".why").textContent = `HAHAHHAHAHAHAHAHAHAHHAHAHAHHAHAHHAHAHAHHAHAHAHAAH`;
        }
        setTimeout(() => {
            alert(wins==5 ? "Congratulations! You Won! Thanks for playing. Close Prompt to play again!":"HAHAHAHA LOSER YOU LOST! I HAD NO EXPECTATIONS LMAO! ClOSE PROMPT TO TRY AGAIN!"
            );
            document.querySelector(".win_loss").textContent = "Make your move if you dare!";
            document.querySelector(".why").textContent = `Choose one of the options below to begin`;
            document.querySelector(".Wins").textContent = "Current Wins:"+ (wins=0);
            document.querySelector(".Losses").textContent = "Current Losses:"+ (losses=0);
            document.querySelector(".Ties").textContent = "Current Ties:"+ (ties=0);
            console.log(wins+ " " +losses+"  "+ties);
            document.querySelector(".Player_text").textContent = `Your Choice?`;
            document.querySelector(".Computer_text").textContent = `Computer Choice?`;
            document.querySelector(".Computer_Logo").textContent = emoji['Default'];
            document.querySelector(".Player_Logo").textContent = emoji['Default'];
        }, 0);
    }
}