/**
 * @param {string} s
 * @return {number}
 */
let longestValidParentheses = function(s) {

    let left = 0;
    let right = 0;
    let maxLength = 0; 
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            left++;
        }
        
        if(s[i] == ")") {
            right++;
        }
        
        if (left == right) {
            maxLength = Math.max(maxLength, right+left);
        }
        
        if (right > left) {
            left = 0; 
            right =0;
        }
    }
    
    left = 0; 
    right = 0;
    
    for (let r = s.length-1; r > 0;  r--) {
        if (s[r] == "(") {
            left++;
        }
        
        if (s[r] == ")") {
            right++;
        }
        
        if (left == right) {
            maxLength = Math.max(maxLength, left+right);
        }
        
        if (left > right) {
            left =0;
            right = 0; 
        }
    }
    return maxLength;
};