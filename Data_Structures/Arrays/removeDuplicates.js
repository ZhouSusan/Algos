function removeDuplicates(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let elements = {};
    let noDuplicatesArr = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (!elements.hasOwnProperty(current)) {
            elements[current] = 1;
        } else {
            elements[current]++;
        }
    }

    for (let key in elements) {
        noDuplicatesArr.push(key);
    }

    return noDuplicatesArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 3, 4, 6, 7, 6, 8]));// [1, 2, 3 4, 6, 7, 8]
