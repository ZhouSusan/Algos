/*
Replace Vowel with Another Character
Create a function that takes a string and replaces the vowels with another character.

a = 1
e = 2
i = 3
o = 4
u = 5
Examples
replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1r3"
Notes
The input will always be in lowercase.
*/

/*
i: str
o: str with replaced vowels.
C: None.
E: empty str.
  */

function replaceVowel(word) {
    var swappedStr= '';
    var referenceObj ={
        'a' : 1,
        'e' : 2,
        'i' : 3,
        'o' : 4,
        'u' : 5
    }
	for (var index of word){
        if(referenceObj[index] === undefined){
            swappedStr +=index;
        }else {swappedStr += referenceObj[index];}
    }
    return swappedStr;
}

// function replaceVowel(word) {
//     if (word.length === 0) {
//         return "";
//     }

//     var wordArr = word.split("");
//     for (var i = 0; i < wordArr.length; i++) {
//         if (wordArr[i] === 'a') {
//             wordArr[i] = 1;
//         }
//         if (wordArr[i] === 'e') {
//             wordArr[i] = 2;
//         }
//         if (wordArr[i] === 'i') {
//             wordArr[i] = 3;
//         }
//         if (wordArr[i] === 'o') {
//             wordArr[i] = 4;
//         }
//         if (wordArr[i] === 'u') {
//             wordArr[i] = 5;
//         }
//     }
//     return wordArr.join("");
// }

function assertEqual(actual, expected, testName){
    if (actual === expected){
        console.log('PASSED: ' +actual +' fullfills ' +testName+ 'expected: '+expected);
    } else {
        console.log('FAILED' + ' it returned ' +actual+ '\n'+ ' expected '+expected);}
}

assertEqual(replaceVowel("karachi"), "k1r1ch3", "replace vowels within string");
assertEqual(replaceVowel("dang"), "d1ng", "replace vowels within string");
assertEqual(replaceVowel("aen"), "12n", "replace vowels within string");
assertEqual(replaceVowel("chembur"), "ch2mb5r", "replace vowels within string");
assertEqual(replaceVowel("khandbari"), "kh1ndb1r3", "replace vowels within string");
assertEqual(replaceVowel("thamel"), "th1m2l", "replace vowels within string");