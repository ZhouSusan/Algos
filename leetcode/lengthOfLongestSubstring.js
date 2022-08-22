/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let i = 0;//start 
    let j = 0;//counter
    let maxLength = 0;
    
    let set = new Set();
    
    while (j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            maxLength = Math.max(maxLength, set.size);
            j++;
        } else {
            set.delete(s[i]);
            i++
        }
    }
    return maxLength;
};

var lengthOfLongestSubstring2 = function(s) {
    let longest = 0;
    let start = 0; 
    let current = 0;
    
    let charSet = new Set();
    
    while (current < s.length) {
        //check if the current character exist in charSet 
        if (charSet.has(s[current])) {
            charSet.delete(s[start++]);
        } else {
            charSet.add(s[current++]);
            longest = Math.max(longest, charSet.size);
        }
    }
    
    return longest;
};