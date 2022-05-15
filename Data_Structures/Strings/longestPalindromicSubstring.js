/* 
Longest Palindrome
For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
Strings longer or shorter than complete words are OK.
All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";




/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */

function isPalindrome(str){
    
    let low = 0; 
    let high = str.length-1;
    
    while (low <= high) {
        if(str[low] === str[high]) {
            low++;
            high--;
        }
        else if (str[low] !== str[high]) {
            return false;
        }
    }
    return true;
}


function longestPalindromicSubstring(str) {
    let longestPalindrome = "";
    for(i=0;i<str.length;i++){
        var tempStr=str.substring(i,str.length)
        if(isPalindrome(tempStr)&(tempStr.length>=longestPalindrome)){
            longestPalindrome=tempStr
            }
        }
    return longestPalindrome
}
console.log(longestPalindromicSubstring(two_str1));
console.log(longestPalindromicSubstring(two_str2));
console.log(longestPalindromicSubstring(two_str3));
console.log(longestPalindromicSubstring(two_str4));
console.log(longestPalindromicSubstring(two_str5));