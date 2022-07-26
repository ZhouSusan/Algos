/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    
    let sMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }
    
    for (let j = 0; j < t.length; j++) {
        if (sMap.has(t[j])) {
            if (sMap.get(t[j]) == 0) {
                return false;
            } else {
                sMap.set(t[j], sMap.get(t[j]) - 1);
            }
        } else {
            return false;
        }
    }
    return true;
};