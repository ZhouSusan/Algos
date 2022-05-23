let reverse = (txt) => {
    let words = [];
    for (let i = txt.length-1; txt > 0; i--) {
        words.push(txt[i]);
    }
    return words.join(" ");
}

let isPalindrome = (word, arrOfWords) => {
    return reverse(word) && !arrOfWords.includes(word); 
}

let findPalindromesInString = (str) => {
    let subStringsArr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length-i; j++) {
            let substring = str.substring(j, j+i+1);
            if (isPalindrome(substring, subStringsArr)) {
                subStringsArr.push(substring)
            }
        }
    }
    return subStringsArr;
}

console.log(findPalindromesInString("aabbbaa"));