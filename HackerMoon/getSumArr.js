let getSumArr = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    if (arr.length === 1) {
        return arr[0];
    }
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(getSumArr([1, 2, 3, 4, -2, -1]));//7