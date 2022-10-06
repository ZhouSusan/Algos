/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 2) {
        return true;
    }
    
    let regexS = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    let left = 0; 
    let right = regexS.length-1;
    
    while (left <= right) {
        if (regexS[left] == regexS[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    
    return true;
};

/*C#

//convert input string to all lower cases. Then using a for loop, compare each character from left and right to see if they are equal to each other, while ingoring all white spaces in string. If the characters does not match, return false 

public class Solution {
    public bool IsPalindrome(string s) {
        if (s.Length <= 1) {
            return true;
        }
        
        int start = 0;
        int end = s.Length-1;
        s = s.ToLower();
        
        while (start <= end) {
            char currStart = s[start];
            char currEnd = s[end];
            
            //checking if there is a non-alphanumeric character in left and right of the sentence 
            if (!(currStart >= 'a' && currStart <= 'z')) {
                start++;
            } else if (!(currEnd >= 'a' && currEnd <= 'z')) {
                end--;
            } else if (currStart == currEnd){
                start++;
                end--;
            } else {
                return false;
            }
        }
        
        return true; 
    }
}

*/
