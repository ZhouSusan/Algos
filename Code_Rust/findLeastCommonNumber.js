/*We’re given three integer arrays, each sorted in ascending order.
Return the smallest number common in all three arrays. In case no number is common, return -1.*/

let findLeastCommonNumber = function(arr1, arr2, arr3) {
    let array = arr1.concat(arr2).concat(arr3)
    let numberObj = {};
    for (let i = 0; i < array.length; i++) {
        if (numberObj.hasOwnProperty(array[i])) {
            numberObj[array[i]]++;
        } else {
            numberObj[array[i]] = 1;
        }
    }
    let commonSmallesNum = -1; 
    for (let key in numberObj) {
    if (numberObj[key] === 3) {
        commonSmallesNum = parseInt(key);
        break;
    }
    }
    return commonSmallesNum;
};

const findLeastCommonNumber2 = (v1, v2, v3) => {
    let [i, j, k] = [0, 0, 0];

    while (i < v1.length && j < v2.length && k < v3.length) {
        if (v1[i] === v2[j] && v2[j] === v3[k]) {
            return v1[i];
        }

         //increment the iterator
        if (v1[i] <= v2[j] && v1[i] <= v3[k]) {
            i++;
        } else if (v2[j] <= v1[i] && v2[j] <= v3[k]) {
            j++;
        } else if (v3[k] <= v1[i] && v3[k] <= v2[j]) {
            k++
        }
    }
    return -1;
}

v1 = [6, 7, 10, 25, 30, 63, 64]
v2 = [0, 4, 5, 6, 7, 8, 50]
v3 = [1, 6, 10, 14]

console.log(findLeastCommonNumber2(v1, v2, v3));