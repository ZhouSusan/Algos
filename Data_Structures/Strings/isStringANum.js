let isStringANum = function(s) {
    if (s.length === 0 || s[s.length-1] === ".") {
        return false;
    }
    if (Number(s)) {
        return true;
    }
    return false;
};

console.log(isStringANum("0.1"));
console.log(isStringANum("1.1.2"));