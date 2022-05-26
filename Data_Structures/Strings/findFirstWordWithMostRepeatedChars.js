// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
// Break up individual word into individual letters.
var letters = word.split("");
var letterCount = {};
// Count the instances of each letter
for(var i= 0; i <letters.length; i++) {
    if(letterCount[letters[i]] === undefined) {
    letterCount[letters[i]] = 1;
    } else {
        letterCount[letters[i]]++;
    }
    var max = 0;
    for(letter in letterCount) {
        if(letterCount[letter]> max) {
        max = letterCount[letter];
    }
    }  
}

// Iterate all the counts and find the highest
// Return this word's max repeat count
return max;
}

function findFirstWordWithMostRepeatedChars(text) {
var maxRepeatCountOverall = 0;
var wordWithMaxRepeatCount = '';

// Break up input text into words (space-delimited).
var words = text.split(" ");
// For each word...
for(var j=0; j<words.length; j++) {
    var word = words[j];
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    // If that max repeat count is higher than the overall max repeat count, then
    if(repeatCountForWord > maxRepeatCountOverall) {
    maxRepeatCountOverall = repeatCountForWord;
    wordWithMaxRepeatCount = word;
    }
}
return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
if(actual === expected) {
    console.log('passed');
} else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got ' + actual + '"');
}
}
// TESTS CASES

var output1 = 'peaches';
var actualOutput = findMaxRepeatCountInWord(output1);
var expectedOutput = 2;
var testName = "should return the most occurence character"
assertEqual(actualOutput, expectedOutput, testName);

var output2 =  'once upon a timing';
var actualOutput = findFirstWordWithMostRepeatedChars(output2);
var expectedOutput = 'timing';
var testName = "should return the must repeated words";
assertEqual(actualOutput, expectedOutput, testName);