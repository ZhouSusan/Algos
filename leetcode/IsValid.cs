public class Solution {
    public bool IsValid(string s) {
        int len = s.Length;
        Stack <char> parenStack = new();
        
        foreach(char item in s)
        {
            switch(item) 
            {
                case '{':
                    parenStack.Push('}');
                    break;
                case '[':
                    parenStack.Push(']');
                    break;
                case '(':
                    parenStack.Push(')');
                    break;
                case '}':
                case ']':
                case ')':
                    if (parenStack.Count == 0)
                    {
                        return false;
                    }
                
                    if (parenStack.Pop() != item)
                    {
                        return false;
                    }
                    
                    break;
                
                default:
                break;
            }
            
        }
        return parenStack.Count == 0;
    }
}