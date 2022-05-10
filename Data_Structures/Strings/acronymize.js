/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {String} str A string to be turned into an acronym.
 * @returns {String} The given str converted into an acronym.
 */

function acronymize(str) {
    let acronym = '';
    let words = str.trim().split(' ');
    for (let i = 0; i < words.length; i++) {
        acronym += words[i][0].toUpperCase();
    }
    console.log(acronym);
    return acronym;
}

function acronymize2 (str) {
    let resultStr = '';
    let isNewWord = true;

    for (let j = 0; j < str.length; j++) {
        if (str.charAt(j) === " ") {
            isNewWord = true;
        } else if ( isNewWord) {
            resultStr += str[j].toUpperCase();
            isNewWord = false;
        }
    }
    console.log(resultStr);
    return resultStr;    
}

function assestEqauls (actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`${testName} has failed`);
    }
}

// assestEqauls(acronymize(str1), expected1, 'acronymize test');
// assestEqauls(acronymize(str2), expected2, 'acronymize test');

assestEqauls(acronymize2(str1), expected1, 'acronymize test');
assestEqauls(acronymize2(str2), expected2, 'acronymize test');