/* Censor Words Longer Than Four Characters

Create a function that takes a string and censors words over four characters with *.

Examples
censor("The code is fourty") ➞ "The code is ******"

censor("Two plus three is five") ➞ "Two plus ***** is five"

censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
Notes
Don't censor words with exactly four characters.
If all words have four characters or less, return the original string.
The amount of * is the same as the length of the word. */

function censor(str) {
    if (str.length === 0) {
    return "";
}

var wordArr = str.split(" ");
for (var i = 0;  i < wordArr.length; i++) {
    if (wordArr[i].length > 4) {
        wordArr[i] = replacer(wordArr[i]);
    } 
}
    return wordArr.join(" ");
}

function replacer(word) {
    var char = word.split("");
    for (var j = 0; j < char.length; j++) {
        char[j] = "*";
    }
    return char.join("");
}
//replacer("hello"); "*****"

function assertEquals (actual, expected, testName){
    if (actual === expected) {
    console.log('passed');
    }else {
    console.log('FAILED: '+actual+ ' does not matech '+expected)}
}


assertEquals(censor("The code is fourty"),"The code is ******", "replaces any word with a length more than 4 charcters");

assertEquals(censor("Two plus three is five"),"Two plus ***** is five", "replaces any word with a length more than 4 charcters");

assertEquals(censor("aaaa aaaaa 1234 12345"),"aaaa ***** 1234 *****", "replaces any word with a length more than 4 charcters");

assertEquals(censor("abcdefghijklmnop"),"****************", "replaces any word with a length more than 4 charcters");

assertEquals(censor("a"),"a", "replaces any word with a length more than 4 charcters");


