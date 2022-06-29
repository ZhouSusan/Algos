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