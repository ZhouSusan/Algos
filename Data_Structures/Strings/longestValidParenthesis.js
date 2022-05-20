function longestValidParentheses(str) {
    if(str.length < 2) {
        return 0;
    }

    let maxParen = 0;
    let opening = 0; // This keep counts of "("
    let closing = 0; // This keeps counts of ")"

    //Loop through left to right -> this will take care of the parenthese
    for (let i = 0;  i < str.length; i++) {
        if (str[i] === "(") {
            opening++;
        }

        if (str[i] === ")") {
            closing++;
        }

        //if the number of "(" = ")", then this is a valid substring 
        if (opening === closing)  {
            maxParen = Math.max(maxParen, opening + closing);
        }

        //if the closing num is greater than opening num, then both cocunters are set to 0; 
        if (closing > opening) {
            closing = 0;
            right = 0;
        }
    }
    //Now we are going to loop through the string right to left, and check for extra opening ")"
    opening = 0;
    closing = 0;

    for (let i = str.length-1; i > 0; i--) {
        if (str[i] === "(") {
            opening++;
        }

        if (str[i] === ")") {
            closing++;
        }

        if (opening === closing) {
            maxParen = Math.max(maxParen, opening + closing);
        }

        if (opening > closing) {
            opening = 0;
            closing = 0;
        }
    }
    return maxParen;
}

console.log(longestValidParentheses(""));//0
console.log(longestValidParentheses(")"));//0
console.log(longestValidParentheses(")()("));//2
console.log(longestValidParentheses(")(()())"));//6