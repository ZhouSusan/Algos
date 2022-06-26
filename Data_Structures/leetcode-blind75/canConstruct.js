var canConstruct = function(ransomNote, magazine) {
    let letterCount = new Map();
    
    for (let i = 0; i < magazine.length; i++) {
        if (letterCount.has(magazine[i])) {
            letterCount.set(magazine[i],            letterCount.get(magazine[i])+1);
        } else {
            letterCount.set(magazine[i], 1);
        }
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        if (letterCount.has(ransomNote[j])) {
            if (letterCount.get(ransomNote[j]) == 0) {
                return false;
            } else {
                letterCount.set(ransomNote[j], letterCount.get(ransomNote[j])-1);
            }
        } else {
        return false;  
        }
    }
    return true;
};

console.log(canConstruct('a', 'b'));//false
console.log(canConstruct('aa', 'ab'));//false
console.log(canConstruct('aa', 'aab'));//true
