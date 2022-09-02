/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
if (s.length == 1) {
    return false;
}  
    
let hashMap = {")": "(", "}": "{", "]": "["};
let stack = [];

for (let i = 0; i < s.length; i++) {
    if (hashMap.hasOwnProperty(s[i])) {
        if (stack.length != 0 && stack[stack.length-1] == hashMap[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    } else {
        stack.push(s[i]);
    }
}
    return stack.length == 0 ? true : false;
};