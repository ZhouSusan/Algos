/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s, t) {
    if (s.length != t.length) {
        return false; 
    }
    
    let sObj = {};
    
    for (let i = 0; i < s.length; i++) {
        if (sObj.hasOwnProperty(s[i])) {
            sObj[s[i]] += 1;
        } else {
            sObj[s[i]] = 1;
        }
    }
    
    for (let j = 0; j < t.length; j++) {
        if (sObj.hasOwnProperty(t[j])) {
            if (sObj[t[j]] == 0) {
                return false;
            } else {
                sObj[t[j]] -= 1;
            }
        } else {
            return false;
        }
    }
    return true; 
};

var isAnagram3 = function(s, t) {
    if (s.length != t.length) {
        return false; 
    }
    
    let sObj = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (sObj.has(s[i])) {
            sObj.set(s[i], sObj.get(s[i])+1);
        } else {
            sObj.set(s[i],1);
        }
    }
    
    for (let j = 0; j < t.length; j++) {
        if (sObj.has(t[j])) {
            if (sObj.get(t[j]) == 0) {
                return false;
            } else {
                sObj.set(t[j], sObj.get(t[j])-1);
            }
        } else {
            return false;
        }
    }
    return true; 
};