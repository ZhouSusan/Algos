let countSubstrings = function(s) {
    const makeSubstringArray = (s) => {
    const subStringArray = [];
    for (let i = 0, l = 1; i + l <= s.length; i++) {
    const substring = s.substring(i, l + i);
    subStringArray.push(substring);
    if (i + l === s.length) {
        i = -1;
        l++
    }
    }
    return subStringArray;
}
const palinChecker = (s) => {
    const revString = s.split('').reverse().join('');
    const isPalin = s === revString;
    return isPalin;
}
const arrayOfSubs = makeSubstringArray(s);
console.log(arrayOfSubs);
return arrayOfSubs.filter(palinChecker).length;
};

console.log(countSubstrings('abc'));