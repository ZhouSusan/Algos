/* Is the Word an Isogram?

An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

Examples
isIsogram("Algorism") ➞ true

isIsogram("PasSword") ➞ false
// Not case sensitive.

isIsogram("Consecutive") ➞ false
Notes
Ignore letter case (should not be case sensitive).
All test cases contain valid one word strings. 
*/
    /*to lower Let
    I: str
    O: bool
    E: if MT return MT?
    */

function isIsogram(str) {
    var wordStr = str.toLowerCase().split("");
    var newSet = new Set(wordStr);
    if (newSet.size === wordStr.length) {
        return true;
    }
        return false; 
}

function assertEquals (actual, expected, testName){
    if (actual === expected) {
        console.log('passed');
    }else {
        console.log('FAILED: '+actual+ ' does not match '+expected)}
}

assertEquals(isIsogram("Algorism"), true, "return true if word is an isogram");
assertEquals(isIsogram("PasSword"), false, "return true if word is an isogram");
assertEquals(isIsogram("Dermatoglyphics"), true, "return true if word is an isogram");
assertEquals(isIsogram("Cat"), true, "return true if word is an isogram");
assertEquals(isIsogram("Filmography"), true, "return true if word is an isogram");
assertEquals(isIsogram("Consecutive"), false, "return true if word is an isogram");
assertEquals(isIsogram("Bankruptcies"), true, "return true if word is an isogram");
assertEquals(isIsogram("Unforgivable"), true, "return true if word is an isogram");
assertEquals(isIsogram("Unpredictably"), true, "return true if word is an isogram");
assertEquals(isIsogram("Moose"), false, "return true if word is an isogram");
