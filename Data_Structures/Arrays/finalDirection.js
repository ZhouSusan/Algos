/* Compass Directions
You face 1 out of the 4 compass directions: N, S, E or W.

A left turn is a counter-clockwise turn. e.g. N (left-turn) ➞ W.
A right turn is a clockwise turn. e.g. N (right-turn) ➞ E.
Create a function that takes in a starting direction and a sequence of left and right turns, and outputs the final direction faced.

Examples
finalDirection("N", ["L", "L", "L"]) ➞ "E"

finalDirection("N", ["R", "R", "R", "L"]) ➞ "S"

finalDirection("N", ["R", "R", "R", "R"]) ➞ "N"

finalDirection("N", ["R", "L"]) ➞ "N"
Notes
You can only face 1 out of the 4 compass directions: N, S, E or W. */

function finalDirection(initial, turns) {
  //console.log(initial);
  //console.log(turns);

  var compassObj = {
    'N' : [0, 360],
    'E' : [90],
    'S' : [180],
    'W' : [270]
  };
  //console.log(compassObj);
 

  var starting = Number.parseInt(compassObj[initial]);
  var total = 0;
  //console.log(total);
  total += starting; 
  //console.log(starting);
  //console.log(total);
  for (var i = 0; i < turns.length; i++) {
    //console.log("current direction ", turns[i]);
    if (turns[i] === "R") {
      if (total === 360) {
        total = 0;
        //console.log(total);
      }
      total += 90;
      //console.log(total);
    } else {
      if (turns[i] === "L") {
        if (total === 0) {
          total = 360;
          //console.log("----", total);
        }
        total -= 90;
        //console.log("next ", total);
      }
    }
  }  
  //console.log("final ", total);
    for (var key in compassObj) {
     //console.log('final', key);
      if(compassObj[key].includes(total)) {
        return key;
      }
    }
    return null;
}

function finalDirection(initial, turns) {
var directionObj = {
  '-270' : 'E',
  '-180' : 'S',
  '-90'  : 'W',
  '0'    : 'N',
  '90'   : 'E',
  '180'  : 'S',
  '270'  : 'W',
  'N'    : 0,
  'E'    : 90,
  'S'    : 180,
  'W'    : 270
}
var inMotion = directionObj[initial];
for (var i = 0; i<turns.length; i++){
  if (turns[i] === 'L'){
    inMotion -= 90;
  } else if (turns[i] === 'R'){
    inMotion += 90;
  }
}
inMotion = inMotion%360;
// console.log(inMotion, ' isIt neg?')
inMotion = JSON.stringify(inMotion);
return directionObj[inMotion];
}



function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`Fail Expected "${expected}", but got "${actual}"`);
  }
}
assertEqual(finalDirection('N', ['L', 'L', 'L']), 'E', 'final direction');
assertEqual(finalDirection('N', ['R', 'R', 'R', 'R', 'R', 'R', 'R']), 'W', 'final direction');
assertEqual(finalDirection('N', ['R', 'R', 'R', 'L']), 'S', 'final direction');
assertEqual(finalDirection('N', ['R', 'R', 'R', 'R']), 'N', 'final direction');
assertEqual(finalDirection('N', ['R', 'L']), 'N', 'final direction');
assertEqual(finalDirection('S', ['R', 'L', 'R', 'L', 'R']), 'W', 'final direction');
assertEqual(finalDirection('S', ['R', 'L', 'R', 'L', 'R', 'L']), 'S', 'final direction');
assertEqual(finalDirection('S', ['R', 'L', 'R', 'L', 'L', 'L']), 'N', 'final direction');
assertEqual(finalDirection('S', ['R', 'R']), 'N', 'final direction');
assertEqual(finalDirection('S', ['R']), 'W', 'final direction');
assertEqual(finalDirection('S', ['L']), 'E', 'final direction');
assertEqual(finalDirection('W', ['L', 'R', 'R']), 'N', 'final direction');
assertEqual(finalDirection('W', ['R', 'L', 'L']), 'S', 'final direction');
assertEqual(finalDirection('E', ['L', 'R', 'R']), 'S', 'final direction');
assertEqual(finalDirection('E', ['R', 'L', 'L']), 'N', 'final direction');