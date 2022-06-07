//Moditfy a function isItPalindrome that takes in one 
//text(string) and determine if it is a palindrome that
//ingore special cases.


function isTextPalindrome(text) {
    if (typeof text !== 'string') {
        return false;
    }
    if (text.length === 0) {
       return true;
    }
   text = text.toLowerCase().replace(/\W+|_/g, '');//regex
   return text === text.split('').reverse().join('');
}


console.log(isTextPalindrome("taco Cat")); // true
console.log(isTextPalindrome(1010)); // false
console.log(isTextPalindrome("Was it a car or a cat I saw?")); // true
console.log(isTextPalindrome({a: "b", b: "a"})); // true
console.log(isTextPalindrome(null)); // false
console.log(isTextPalindrome(false)); // false
console.log(isTextPalindrome("")); //true
