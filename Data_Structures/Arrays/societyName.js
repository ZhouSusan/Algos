/*Secret Society
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

Examples
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
Notes
The secret society's name should be entirely uppercased. */

function societyName(friends) {
  var sorted = friends.sort();
  var outputAcr = '';
  for (var index of sorted){
    outputAcr += index[0];
  }
  return outputAcr;

}

function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(`FAIL Expected "${expected}, but got "${actual}"`);
  }
}
assertEquals(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS', " name will be the first letter of each of their names");
assertEquals(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR', "name will be the first letter of each of their names");
assertEquals(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN', " name will be the first letter of each of their names");
assertEquals(societyName(['Sherlock', 'Irene', 'John']), 'IJS', " name will be the first letter of each of their names");
assertEquals(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS', " name will be the first letter of each of their names");