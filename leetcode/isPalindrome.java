class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        
        int numX = x; 
        int reverseX = 0;
        
        while (numX > 0) {
            reverseX = reverseX * 10 + numX % 10;
            numX /= 10;
        }
        
        return x == reverseX;
    }
}

/**
code in C#
public class Solution {
    public bool IsPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        
        int num = x;
        int reverse = 0;
        while(num > 0) {
            reverse = reverse * 10 + num % 10;
            num /= 10;
        }
        
        return x == reverse;
    }
}
*/