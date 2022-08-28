/**
 * @param {number[]} digits
 * @return {number[]}
 
 -reverse the array, and check if the last number is a nine 
 -if it is change the number to a zero, and store a one to a carry var
 -repeat this, until you iterate over the loop
 -if you iterate over the loop, and the carry is not equal to zero,
    then you apend to the front
-else you add to the digit, starting at the back at the array, when the number is not a nine
 
 */
var plusOne = function(digits) {

    let carry = 1;
    let i = digits.length-1;
    
    while (carry == 1) {
        if (i >= 0) {
            //in the case, the current number is nine, carry stays 1
             //and the current number is set to zero
            if (digits[i] == 9) {
                digits[i] = 0;
            //if the current number is not nine, then we dd the number by one and carry changed to 0
            } else {
                digits[i]+= 1;
                carry = 0;
            }
        } else {
            digits.unshift(1);
            carry = 0;
        }
        i-=1;
    }
    return digits;
};  