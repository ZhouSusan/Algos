/*Numbers in Strings
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without RegEx. */

function numInStr(arr) {
    var numString = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === JSON.stringify(Number.parseInt(arr[i][j]))) {
                // console.log(arr[i][j], 'this is the left side of =');
                numString.push(arr[i]);
                console.log("current add" ,numString);
                break;
            }
        }
    }
    return numString;
}

parseInt('0e0')  // 0
parseInt('08')   // 0, because '8' is not an octal digit.

console.log(typeof (1 + 'a'),typeof (1+'1'));
console.log(Number.parseInt('35.6'));
console.log(Number.parseInt('123ABC4'));
console.log(Number.parseInt('ABC123'));
// Number('123') === 123  // true
// number('1')

function assertArraysEqual(actual, expected, testName) {
    actual = JSON.stringify(actual); 
    expected = JSON.stringify(expected);
    var sameLength = actual.length === expected.length;
    var sameValues = true;

    for (var i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            sameValues = false;
            break;
        }
    }
        if (sameValues && sameLength) {
            console.log('passed');
        } else {
        console.log(`Fail expected ${expected}, but got ${actual}`);
    }
}
assertArraysEqual(numInStr(['abc', 'abc10']), ['abc10'], "Should return only strings with numbers");
assertArraysEqual(numInStr(['abc', 'ab10c',  'a10bc', 'bcd']),['ab10c', 'a10bc'], "Should return only strings with numbers");
assertArraysEqual(numInStr(['1', 'a' , ' ' ,'b']), ['1'], "Should return only strings with numbers");
assertArraysEqual(numInStr(['rct', 'ABC', 'Test', 'xYz']), [], "Should return only strings with numbers");
assertArraysEqual(numInStr(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz']), ['10xYZ', 'xy2K77', 'Z1K2W0'], "Should return only strings with numbers");
assertArraysEqual(numInStr(['-/>', '10bc', 'abc ']), ['10bc'], "Should return only strings with numbers");