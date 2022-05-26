function findLongestPalindrome(sentence) {
    // split sentence into words
    let words = sentence.split(" ");
    let palindrome = []
    // iterate words and collect the palindromes
    for(let i=0; i <words.length; i++) {
        if(isPalindrome(words[i])) {
        palindrome.push(words[i]);
        }
    }
    // sort the list of palindromes by word length
    let word = palindrome.sort(sortAscendingByLength);
    // return the largest item in the sorted list
    
    return word.pop();
}


function reverseString(string) {
    let splitString = string.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');

    return joinArray;
}

function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    //make case insenstive 
    let word = word.toLowerCase();
    return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    }
    return 0;
}

// ASSERTION FUNCTION(S) TO BE USED

function assertEqual(actual, expected, testName) {
if(actual === expected) {
    console.log('passed');
} else {
    console.log('FAILED [' + testName + '[ Expected "' + expected + '", but got "' + actual + '"');
}
}

// TESTS CASES

let palindrome_test = 'wtrrtw';
let non_palindrome_test = 'reticulated';

let palindrome_test_result = isPalindrome(palindrome_test);

assertEqual(palindrome_test_result, true, 'should return true when input is a palindrome');

let non_palindrome_test_result = isPalindrome(non_palindrome_test);

assertEqual(non_palindrome_test_result, false, "should return false when an input is not a palindrome");

let resultOfReverse = reverseString('abcdefg');
assertEqual(resultOfReverse, 'gfedcba','should return the reverse of a string');

let resultOffindLongestPalindrome = findLongestPalindrome('a cute racecar went down to eye stettets');
assertEqual(resultOffindLongestPalindrome, 'stettets','should return the longest palindrome in the string');