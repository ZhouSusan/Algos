let reverse = (txt) => {
    let words = [];
    for (let i = txt.length-1; i >= 0; i--) {
        words.push(txt[i]);
    }
    return words.join("");
}

console.log(reverse('hello'));

let isPalindrome = (word) => {
    if (word.length === 1) {
        return false;
    }
    return word === reverse(word); 
}

let findPalindromesInString = (str) => {
    let subStringsArr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length-i; j++) {
            let substring = str.substring(j, j+i+1);
            console.log(substring);
            if (isPalindrome(substring)) {
                subStringsArr.push(substring)
            }
        }
    }
    return subStringsArr;
}

console.log(findPalindromesInString("aabbbaa"));