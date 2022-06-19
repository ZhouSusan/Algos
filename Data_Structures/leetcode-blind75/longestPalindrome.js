/**
 * @param {string} s
 * @return {number}
 */


var longestPalindrome = function(s) {
    let charCount = {};
    for (let c = 0; c < s.length; c++) {
        if (charCount.hasOwnProperty(s[c])) {
            charCount[s[c]] += 1;
        } else {
            charCount[s[c]] = 1;
        }
    }
    
    let result = 0;
    let oddOccurence = false;//calcuates the odd characters 
    
    if (charCount.length == 1) {
        return 1; 
    } 
    
    //loop through CharCount's object
    for (let i in charCount) {
        if (charCount[i] % 2 == 0) {
            result += charCount[i];
        } else {
            oddOccurence = true;  
            result += charCount[i] - 1; 
        }
    }
    return oddOccurence ? result + 1 : result;
};