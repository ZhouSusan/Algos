//Write a function that takes three arrays, and return
//the common minuinum number from all three arrays. 
//Assume all the arrays are not sorted. Try to Avoid using 
//the for multiple loops. If no common number exist, 
//return -1. 

//for-of is a new loop in ES6 that replaces both for-in 
//and forEach() and supports the new iteration protocol.

function getCommonMinNumber(array1, array2, array3) {

    var array4 = [];
    for(var num of array1){
        if(array2.includes(num) && array3.includes(num)) {
        array4.push(num);
        }
    }
    if (array4.length === 0) {
        return -1; 
    }
    var sortedArray = array4.sort();
    return sortedArray.shift();
    }

var arr1 = ['apple', 'orange', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'];
var arr2 = ['taco', 'fish', 'apple', 'pizza'];
var arr3 = ['banana', 'pizza', 'fish', 'apple'];

// var arr1 = [8, 12, 16, 20 ,24, 30, 1, 48];
// var arr2 = [-2, 10, 16, 28, 1, 32, 48, 52];
// var arr3 = [-1, 0, 1, 8, 12, 16, 27, 48, 64];

console.log(getCommonMinNumber(arr1, arr2, arr3));