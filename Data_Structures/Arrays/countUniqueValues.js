let countUniqueValues = (arr) => {
    return new Set(arr).size;
}

console.log(countUniqueValues([1,1,1,1,1,2]));//2
console.log(countUniqueValues([1,2, 3, 4, 5, 6]));//6