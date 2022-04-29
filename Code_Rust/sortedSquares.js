/*
Given an integer array, sorted in non-decreasing order, return an array of the squares of each number, 
sorted in non-decreasing order.
*/

let sortedSquares = function(nums){
    let result = [nums.length].fill(null);
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i]*nums[i];
    }
    return result.sort(function(a, b) { return a - b});
};

function assertEqualsArray(actual, expected, testName) {
    let sameLength = true;
    let sameValue = true; 

    if (actual.length !== expected.length) {
        sameLength = false;
    }

    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            sameValue = false;
        }
    }

    if (sameLength && sameValue) {
        console.log('passed');
    } else {
        console.log(`${testName} has failed`);
    }
}

let actual1 = sortedSquares([-4, -1, 0, 3, 10]);
let expected1 = [0, 1, 9, 16, 100];

let actual2 = sortedSquares([-7, -3, 2, 3, 11]);
let expected2 = [4, 9, 9, 49, 121];

let actual3 = sortedSquares([-100, 100]);
let expected3 = [10000, 10000];

let actual4 = sortedSquares([-5]);
let expected4 = [25];

let actual5 = sortedSquares([5]);
let expected5 = [25];

assertEqualsArray(actual1, expected1, 'sortedSquares');
assertEqualsArray(actual2, expected2, 'sortedSquares');
assertEqualsArray(actual3, expected3, 'sortedSquares');
assertEqualsArray(actual4, expected4, 'sortedSquares');
assertEqualsArray(actual5, expected5, 'sortedSquares');