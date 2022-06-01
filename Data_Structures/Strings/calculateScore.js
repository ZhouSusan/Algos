/* Rock, Paper, Scissors!
Abigail and Benson are playing Rock, Paper, Scissors.

Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

R stands for Rock
P stands for Paper
S stands for Scissors
Examples
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie" */

function calculateScore(games) {
	var playerOne = 0;
  var playerTwo = 0;

  for (var i = 0; i < games.length; i += 1) {
    if ((games[i][0] === "R" && games[i][1] === "S") ||   (games[i][0] === "S" && games[i][1] === "P") ||
     (games[i][0] === "P" && games[i][1] === "R")) {
       playerOne += 1;
     } else if (games[i][0] !== games[i][1]) {
        playerTwo += 1;
     }
  }
  if (playerOne > playerTwo) {
    return "Abigail";
  } else if (playerOne < playerTwo) {
    return  "Benson";
  } 
  return "Tie";
}
