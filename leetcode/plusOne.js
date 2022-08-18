/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let splitDigits = digits.join('');
    let numString = '';
    
    for (let i = 0; i < splitDigits.length; i++) {
        numString += splitDigits[i];
    }
    
    digitsPlusOne = parseInt(numString) + 1;
    return digitsPlusOne.toString().split('');
};