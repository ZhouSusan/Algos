/**
 * @param {string} s
 * @return {string}

    time O(n), space(n)  
 */
var reverseVowels = function(s) {
    let stack = [];
    let vowels = new Set();
    vowels.add('a');
    vowels.add('e');
    vowels.add('i');
    vowels.add('o');
    vowels.add('u');
    vowels.add('A');
    vowels.add('E');
    vowels.add('I');
    vowels.add('O');
    vowels.add('U');
    
    let letter = s.split("");
    
    for (let i = 0; i < letter.length; i++) {
        if (vowels.has(letter[i])) {
            stack.push(letter[i]);
            letter[i] = "*";
        }
    }
    
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === "*") {
            letter[i] = stack.pop();
        }
    }
    
    return letter.join("");
};