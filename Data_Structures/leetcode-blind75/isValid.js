/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let hashMap = {")": "(", "]": "[", "}" : "{"};
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        //closed parentheses
        if (hashMap.hasOwnProperty(s[i])) {
            if (stack.length != 0 && stack[stack.length-1] == hashMap[s[i]]) {
                stack.pop();
            } else {//if stack doesn't match each other or stack is empty 
                return false;
            }
        }
         //opened parentheses
        else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? true : false;
};