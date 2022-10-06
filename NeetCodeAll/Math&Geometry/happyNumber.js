/**
 * @param {number} n
 * @return {boolean}
 
 We know that this is a happy number if it reaches to one, unless it reaches to a sum, that we have already seen before. 
 */

 var sumOfSquares = function(n) {
    let output = 0;
    
    //this loop will stop when n reaches 0, since 1 % 10 = 0 && 1 / 10 = 0
    while (n) {
        //getting the digit from the number
       let digit = n % 10;
        //squaring the number
       digit = digit ** 2;
        //adding the squared digit to output 
        output += digit; 
        //updating n by doing integer divison
        n = Math.floor(n /10);
    }
    return output;
}

var isHappy = function(n) {
    let visited = new Set();
    
    while (!visited.has(n)) {
        visited.add(n);
        n = sumOfSquares(n);
        
        if (n == 1) {
            return true;
        }
    }
    return false;
};