// Given a pattern and a string str, find if str follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.


class Solution {
    public boolean wordPattern(String pattern, String s) {
        
        String[] words = s.split(" ");
        char[] characters = pattern.toCharArray();
        
        if (words.length != pattern.length()) {
            return false;
        }
        
        HashMap charMap = new HashMap();
        HashMap sMap = new HashMap();
        
        for (Integer i=0; i<words.length; ++i) {
            if (charMap.put(characters[i], i) != sMap.put(words[i], i)) {
                return false;
            }
        }
        return true;
    }
}