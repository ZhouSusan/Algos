function duplicateEncode(word){
    let letterCount = {};
    let resultStr = "";
    let letters = word.toLowerCase().split("");

    letters.forEach(function(letter) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    });

    console.log(letterCount);

    return letters.map(function(letter) {
        return letterCount[letter] === 1 ? '(' : ')';
    }).join('');
}