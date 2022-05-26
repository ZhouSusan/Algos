// Write a function rockPaperScissors that takes a string('paper', 'rock', or 'scissors'), chooses randomly another string ('paper', 'rock', or 'scissors') and returns the result as a string of the outcome following the rules of Rock-Paper-Scissors https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors

//input: string - string of rock, paper or scissor
//output: string - i.e paper vs scissors: scissors wins!
//c: none
//e: none 

//Approach 

//1. use math.random from 0 to 1
//2. use if statement for 4 cases
//  if there is a tie, return there is a tie,
//  if there is paper and rock, return paper vs rock, paper wins!!
//  if there is rock and scissors, return rock vs scissors, rock wins!
//  if there is paper and scissors, return paper and scissors, scissors win! 


function rockPaperScissors(userChoice) {

var pcChoice = Math.random();
//console.log(pcChoice);

if (pcChoice <=0.33) {
    pcChoice = "rock";
} else if (pcChoice <=0.66) {
    pcChoice = "paper";
} else {
    pcChoice = "scissors";
}
if (userChoice === pcChoice) {
    return `${userChoice} vs ${pcChoice}: tie!`;
} 
if (userChoice === 'paper') {
    if (pcChoice === 'rock') {
        return `${userChoice} vs ${pcChoice}: ${userChoice} wins!`;
    } else {
    return `${userChoice} vs ${pcChoice}: ${pcChoice} wins!`;
    }
} 
if (userChoice === 'rock') {
    if (pcChoice === 'scissors') {
        return `${userChoice} vs ${pcChoice}: ${userChoice} wins!`;
    } else {
    return `${userChoice} vs ${pcChoice}: ${pcChoice} wins!`;
    }
}
if (userChoice === 'scissors') {
    if (pcChoice === 'paper') {
        return `${userChoice} vs ${pcChoice}: ${userChoice} wins!`;
    } else {
    return `${userChoice} vs ${pcChoice}: ${pcChoice} wins!`;
    }
}
}

console.log(rockPaperScissors('paper')); 
console.log(rockPaperScissors('rock')); 
console.log(rockPaperScissors('scissors'));