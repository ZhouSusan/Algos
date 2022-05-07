/*
i: arr- array
o: arr- array without the last elements 
c: do not use pop();
e: empty arr will return []
*/

function removeLastElement(arr) {
    if (arr.length === 0) {
        return arr;
    }
    console.log('before', arr);
    arr.length -= 1;
    console.log('after', arr);
    return arr;
}

console.log(removeLastElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));