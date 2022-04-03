let decisions = ["Rock","Paper","Scissors"];
let PlayerScore= 0;
let ComputerScore = 0;

function Gameplay(playerDec){

    let txt_result = document.getElementById("txt_result");
    let txt_score = document.getElementById("txt_score");
    let choice = document.getElementById("choice");

    let computerDecision = decisions[Math.floor(Math.random()*decisions.length)];
    console.log(computerDecision);
    //Tie

        if (playerDec === computerDecision){
            txt_result.style.color = "grey"
            txt_result.innerHTML = "Tie ! Play Again!";
    
        }
        else if((playerDec == "Rock" && computerDecision == "Paper") || 
                (playerDec == "Paper" && computerDecision == "Scissors") ||
                (playerDec == "Scissors" && computerDecision == "Rock")){
            txt_result.innerHTML = `You Lose! ${computerDecision} beats ${playerDec}`;
            txt_result.style.color = "red"
            ComputerScore +=1;
        }
        else{
            txt_result.innerHTML = `You Won! ${playerDec} beats ${computerDecision}`;
            txt_result.style.color = "green"
            PlayerScore +=1;
        }
        
        choice.innerHTML = `You: ${playerDec}  &nbsp &nbsp &nbsp Computer: ${computerDecision}`;
        txt_score.innerHTML = `Your Score: ${PlayerScore}  &nbsp &nbsp &nbsp Computer Score: ${ComputerScore}`;
        if(PlayerScore == 5){
            alert("Yeeeey You Won!");
            setTimeout(function(){
                document.location.reload();
            }, 1000); 

        }
        else if(ComputerScore == 5){
            alert("You Lost! :(");
            setTimeout(function(){
                document.location.reload();
            }, 1000); 
    }
    }

