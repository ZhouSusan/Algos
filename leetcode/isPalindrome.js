/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
    
//     let lowerS = s.toLowerCase(); 
    
//     //ASCII characters from lower case character (97-122)
//     let characterS = "";
//     for (let i = 0; i < lowerS.length; i++) {
//         if (lowerS.charCodeAt(i) >=97 && lowerS.charCodeAt(i) < 123) {
//             characterS += [lowerS[i]];
//         } else if (lowerS.charCodeAt(i) >=48 && lowerS.charCodeAt(i) < 58) {
//             characterS += [lowerS[i]];
//         }
//     }
    
//     if (characterS.length <= 1) {
//         return true;
//     }
    
    
//     let reverseCharacterS = "";
//     for (let j = characterS.length-1; j >= 0; j--) {
//         reverseCharacterS += characterS[j];
//     }
//     console.log(characterS);
//     console.log(reverseCharacterS);
//     return reverseCharacterS == characterS ? true: false;
// };

//refactored code 

const isPalindrome = function(s) {
    let filterStr = s.replace(/[^A-Za-z0-9]/g, "");

    let i = 0; 
    let j = filterStr.length - 1;

    while (i <= j) {
        if (filterStr[i].toLowerCase() != filterStr[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));//true
console.log(isPalindrome("race a car"));//false
console.log(isPalindrome(" "));//true
console.log(isPalindrome(".,"));//true
console.log(isPalindrome("0P"));//false
console.log(isPalindrome("9,8"));//true