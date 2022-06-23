/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    let ransomNoteLength = ransomNote.length; 
    let prefixSlice = magazine.slice(0, ransomNoteLength+ 1);
    return ransomNote == prefixSlice ? true: false;
};