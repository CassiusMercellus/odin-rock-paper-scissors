document.addEventListener("DOMContentLoaded", function() { 
    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }
    function playRound(playerSelection, computerSelection) {
        let player = playerSelection.toLowerCase();
        let computer = computerSelection.toLowerCase();
    
        if (player === computer) {
            return "It's a tie!";
        } else if ((player === "rock" && computer === "scissors") ||
                   (player === "paper" && computer === "rock") ||
                   (player === "scissors" && computer === "paper")) {
            return "You win! " + player + " beats " + computer + ".";
        } else {
            return "You lose! " + computer + " beats " + player + ".";
        }
    }
    
    function handleClick(playerSelection) {
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        document.getElementById("result").innerText = result;
    }
    
    document.getElementById("rock").addEventListener("click", function() {
        handleClick("rock");
    });
    document.getElementById("paper").addEventListener("click", function() {
        handleClick("paper");
    });
    document.getElementById("scissors").addEventListener("click", function() {
        handleClick("scissors");
    });
    
})
