/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    for (let i = 0; i < n.length; n++) {
        if (n[i] == "1") {
            count++;
        }
    } 
    return count;
};