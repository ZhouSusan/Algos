function squareArr(arr) {
    if (arr.length === 0) {
        return [];
    }

    return arr.map(x => x**2);
}

console.log(squareArr([])); //[]
console.log(squareArr([-1, -2, -3])); //[1, 4, 9]
console.log(squareArr([4, 5, 6, 7])); //[16, 25, 36, 49]
console.log(squareArr([-1, 2, -3, 4, -5, 6])); //[1, 4, 9, 16, 25, 36]