var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
function compMove() {
    if (computerChoice <= 0.33) {
        computerChoice = "rock";
    } else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);
}
function compare (choice1,choice2){
    if (choice1 === choice2){
        alert('The result is a tie!');
       /*return prompt('Please make your second choice');*/
    }else if (choice1 === 'rock'){
        if (choice2 === 'scissors'){
            return alert('Player wins');
        }else {
            return alert('Computer wins');
        }
    }else if (choice1 === 'paper'){
        if (choice2 === 'rock'){
            return alert('Player wins');
        }else{
            return alert('Computer wins');
        }
    } else if (choice1 === 'scissors'){
        if (choice2 === 'rock'){
            return alert('Computer wins');
        }else{
            return alert('Player wins');
        }
    }else if (choice1 != 'rock' || choice1 != 'scissors' || choice1 !='paper' || choice1 != ''){
        alert('Only rock,paper,scissors are allowed');
        return computerChoice = false;

    }
}
compMove();
console.log(compare(userChoice,computerChoice));