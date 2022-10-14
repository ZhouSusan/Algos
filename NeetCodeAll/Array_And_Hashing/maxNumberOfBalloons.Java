/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0

Constraints:
1 <= text.length <= 104
text consists of lower case English letters only.
 */

class Solution {
    public int maxNumberOfBalloons(String text) {
        Map <Character, Integer> countText = new HashMap<>();
        countText.put('b', 0);
        countText.put('a', 0);
        countText.put('l', 0);
        countText.put('o', 0);
        countText.put('n', 0);
        
        
        for (char c : text.toCharArray()) {
            if (countText.containsKey(c)) {
                countText.put(c, countText.get(c) + 1);
            }
        }
        countText.put('l', countText.get('l')/2);
        countText.put('o', countText.get('o')/2);
    
        return Collections.min(countText.values());
    }
}