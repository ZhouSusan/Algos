/**
 * @param {number} x
 * @param {number} n
 * @return {number}

    x^-n = 1/x^n   create a helper function, where we are only passing in positive exponents value(Math.abs()) even if it is negative 
 */

const pow = function (x, n) {
    if (n == 1) {
        return x;
    }    
    
    //divide and conquer
    let num = pow(x, Math.floor(n/2));
    if (n % 2 == 0) {
        return num * num;
    } else {
        return x * num * num;
    }
}

var myPow = function(x, n) {
    if (n == 0) {
        return 1;
    }
    
    if ( n > 0) {
        return pow (x, n);
    }
    
    if (n < 0) {
        return 1/ pow(x, -n);
    }
};