/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    let ransomNoteLength = ransomNote.length; 
    let prefixSlice = magazine.slice(0, ransomNoteLength);
    console.log(prefixSlice);
    return ransomNote == prefixSlice ? true: false;
};

console.log(canConstruct('a', 'b'));//false
console.log(canConstruct('aa', 'ab'));//false
console.log(canConstruct('aa', 'aab'));//true
