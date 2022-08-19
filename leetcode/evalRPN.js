/**
 * @param {string[]} tokens
 * @return {number}

Reverse Polish Notation was designed specifically to make computing     easier with the stack. We use Stack to store number until they are used, and then each operand will use hte top two values of the stack. 

The order of numbers are important for substraction and division
We have to make sure the two numbers are processed in their original order, which is opposite order of the the stack. 

After each successful operation, the result should be pushed back onto the stack it is used.
After each iteration, remaining value will be in the stack will be our result => return stack[0]
*/

let a;
let b;
const evaluate = {
    "+": () => a + b,
    "-": () => a - b,
    "*": () => a * b,
    "/": () => ~~(a/b)
}
var evalRPN = function(tokens) {
    let stack = [];
    for (let t of tokens) {
        if (evaluate[t]) {
            b = stack.pop();
            a = stack.pop();
            stack.push(evaluate[t]());
        } else {
            stack.push(~~t);
        }
    }
    return stack;
};