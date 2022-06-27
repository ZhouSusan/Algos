/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
    let sumStr = "";
    let carry = 0;

    let i = a.length-1;
    let j = b.length-1;

    while ( i >= 0 || j >= 0 || carry == 1) {
        //computer sum of the last digit and carry
        carry += ((i >= 0) ? a.charAt(i).charCodeAt(0)-"0".charCodeAt(0):0);
        carry += ((j >= 0) ? b.charAt(j).charCodeAt(0) - "0".charCodeAt(0): 0);
        
        //if the current digit sum is 1 or 3, we add 1 to the   result
        sumStr = String.fromCharCode(parseInt(carry%2) + '0'.charCodeAt(0)) + sumStr;;
        
        //compute carry
        carry = parseInt(carry/2);
        
        i--;
        j--;
        
    }
    return sumStr;

    return sumStr;
};