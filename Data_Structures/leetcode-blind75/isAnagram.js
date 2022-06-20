/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false; 
    }
    
    let sArr = s.split('').sort();
    let tArr = t.split('').sort();
    
    for (let i = 0; i < tArr.length; i++) {
        if (tArr[i] != sArr[i]) {
            return false;
        }
    }
    return true;
};