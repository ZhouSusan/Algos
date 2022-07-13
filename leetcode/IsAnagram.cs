public class Solution {
    public bool IsAnagram(string s, string t) {
        
        if (s.Length != t.Length) 
        {
            return false;
        }
        
        Dictionary <char, int> sLetterCount = new Dictionary <char, int>();
        
        for (int k = 0; k < s.Length; k++)
        {
            if (sLetterCount.ContainsKey(s[k]))
            {
                sLetterCount[s[k]] += 1;
            } else {
                sLetterCount[s[k]] = 1;
            }
        }
        
        for (int l = 0; l < t.Length ; l++)
        {
            if (sLetterCount.ContainsKey(t[l]))
            {
                if (sLetterCount[t[l]] == 0)
                {
                    return false;
                } else {
                    sLetterCount[t[l]] -= 1;
                }
            }  else {
                    return false;
                }
        }
        return true;
    }
}