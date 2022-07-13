using System.Text.RegularExpressions;

public class Solution {
    public bool IsPalindrome(string s) {
        
        string filterStr =  new string(s.Where(c =>char.IsLetterOrDigit(c)).ToArray()).ToLower();

        int start = 0;
        int end = filterStr.Length-1;
    
        while (start <= end) 
        {
            if (filterStr[start] != filterStr[end]) 
            {
                return false;
            }
            start += 1;
            end -= 1;
        }
        return true;
    }
}