/**
 * @param {string} s
 * @return {string}
 */

var reverser = function (word) {
    let reverseStr = "";
    
    for (let k = word.length-1; k >= 0; k--) {
        reverseStr += word[k];
    }
    
    return reverseStr; 
}

var reverseWords = function(s) {
    let i = 0; 
    let j = 0;
    let result = "";
    
    while (j < s.length) {
        while (s[j] !== undefined && s[j] !== " ") {
            j+= 1; 
        }
        
        let subString = reverser(s.substring(i, j));
        let whitespace = " ";
        if (j >= s.length-1) {
            whitespace = "";
        }
        result += subString + whitespace;
        i = j + 1; 
        j= i;
    }
    
    return result;
};