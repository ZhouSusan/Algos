function concat(arr) {
    let updatedArr = [];
        for (elements of arr) {
            console.log('inner array: ', elements);
            for (innerArray of elements) {
                console.log(innerArray);
                updatedArr.push(innerArray);
            }
        }
        return updatedArr;
}

let arrays = [[1, 2, 3], [4, 5], [6]];
concat(arrays);
  // → [1, 2, 3, 4, 5, 6]