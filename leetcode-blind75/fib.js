/**
 * @param {number} n
 * @return {number}
 */
let fib = function(n) {
    if (n == 0) {
        return 0;
    }
    
    if (n == 1) {
        return 1;
    }
    
    while (n >= 2) {
        return fib(n-1) + fib(n-2); 
    }
};