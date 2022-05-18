function reverseWords(text) {
    let reverseText = [];
    let words = text.split(" ");
    
    for (let j = words.length-1; j >= 0; j--) {
        reverseText.push(words[j]);
    }

    return reverseText.join(" ");
}

console.log(reverseWords('Happy coding!'));// 'coding! Happy'