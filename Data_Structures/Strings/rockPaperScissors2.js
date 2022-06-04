// Write a function rockPaperScissors that takes a string('paper', 'rock', or 'scissors'), chooses randomly another string ('paper', 'rock', or 'scissors') and returns the result as a string of the outcome following the rules of Rock-Paper-Scissors https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors

// input : string (rock, paper, scissors)
// output : string (results)

  // Math.random * 3 (0, 1, 2)
  //   0 = rock, 1 = paper, 2 = scissors

  //   compare random === inputString

function rockPaperScissors() {
var string = prompt("Please enter: 'rock', 'paper', or 'scissors'");
var random = Math.floor(Math.random() * 3)
var opponent = '';
// console.log(random);
    if(random === 0) {
        opponent = 'rock';
    }
    if(random === 1) {
        opponent = 'paper';
    }
    if(random === 2) {
        opponent = 'scissors';
    }

if (string === 'rock' && opponent === 'rock') {
    return 'rock vs rock: tie!';
}  
if (string === 'rock' && opponent === 'paper') {
    return 'rock vs paper: paper covers rock- paper wins!!';
}
    if (string === 'rock' && opponent === 'scissors') {
    return 'rock vs scissors: rock crushes scissors- rock wins!!';
}
if (string === 'paper' && opponent === 'rock') {
    return 'paper vs rock: paper covers rock- paper wins!!';
}
if (string === 'paper' && opponent === 'paper') {
    return 'paper vs paper: tie!!';
}
    if (string === 'paper' && opponent === 'scissors') {
    return 'paper vs scissors: scissors cuts paper- scissors wins!!';
    }
if (string === 'scissors' && opponent === 'rock') {
    return 'scissors vs rock: rock crushes scissors- rock wins!!';
}
if (string === 'scissors' && opponent === 'paper') {
    return 'scissors vs paper: scissors cuts paper- scissors wins!!';
}
if (string === 'scissors' && opponent === 'scissors') {
    return 'scissors vs scissors: tie!!';
}
return 'try again: input must be "rock", "paper", or "scissors"';
}

console.log(rockPaperScissors());
console.log(rockPaperScissors());
console.log(rockPaperScissors());
console.log(rockPaperScissors());