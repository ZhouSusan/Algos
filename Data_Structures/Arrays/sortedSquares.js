let sortedSquares = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }

    return arr.sort((a,b) => {
        return a - b;
    });
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))