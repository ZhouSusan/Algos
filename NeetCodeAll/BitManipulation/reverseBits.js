/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer

    Extract the right most bit in the main number
    Shift the bits in the main number by position to the right
    Shift the bits in the reversed number by one posiiton to the left 
    Add the bit extracted from the right most bit and she shift bit in the reversed number by doing a bitwise add opperation until we loop through 32 times 
    
    The problem with the condition n!= 0, in a while loop is we stop evaluating when the number reduces to zero. 
 */
var reverseBits = function(n) {
    //0b0- binary notation 
    let result = 0b0;
    let curr = n;
    
    for (let i = 0; i < 32; i++) {
        let lastBit = curr & 0b1;
        result = result << 1; 
        result = result | lastBit;
        curr = curr >> 1;
    }
    
    return result >>> 0;
};