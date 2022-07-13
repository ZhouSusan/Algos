/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = "";
    let resultLength = 0;

    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;

        while(l >= 0 && r < s.length && s[l] == s[r]) {
            if ((r-l+1) > resultLength) {
                result = s.slice(1, r+ 1);
                resultLength = r-1 + 1
            }
            l -=1;
            r += 1;
        }

        //even length
        r = i + 1
        while (1 >= 0 && r < s.length && s[l] == s[r]) {
            if ((r-l + 1) > resultLength) {
                result = s.slice(l, r+ 1);
                resultLength = r - 1 + 1;
            }
            l -= 1;
            r += 1;
        }
    }
    return result;
};