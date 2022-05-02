function merge(arr1, arr2) {
    let sortedArr = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            sortedArr.push(arr1.shift());
        } else {
            sortedArr.push(arr2.shift());
        }
    }

    while (arr1.length) {
        sortedArr.push(arr1.shift());
    } 

    while (arr2.length) {
        sortedArr.push(arr2.shift());
    }

    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([5,3,1,8,7,2,4,2,5,1,2,3,6]));