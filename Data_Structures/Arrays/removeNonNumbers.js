function removeNonNumbers(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }

    let numArr = [];

    for (let n = 0; n < arr.length; n++) {
        if (typeof arr[n] === 'number') {
            numArr.push(arr[n]);
        }
    }

    return numArr;
}

console.log(removeNonNumbers([])); //[]
console.log(removeNonNumbers(['a', 'b', 'c'])); //[]
console.log(removeNonNumbers([true, true])); //[]
console.log(removeNonNumbers([1, 2, 3, 4, 5, 6])); //[1, 2, 3, 4, 5, 6]
console.log(removeNonNumbers([1, 'a', 3, 'c', 5, true])); //[1, 3, 5]