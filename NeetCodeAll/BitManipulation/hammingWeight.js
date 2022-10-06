/**
 * @param {number} n - a positive integer
 * @return {number}

    (1 & 3 & 5 & 7) = 1
 */
var hammingWeight = function(n) {
    let count = 0;
    
    while (n != 0) {
        count += n % 2;
        n = n >>> 1;
    }
    
    return count;
};