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