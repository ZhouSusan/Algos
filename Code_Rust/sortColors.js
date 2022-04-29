/*
Given an array of n objects colored white, red, or blue, sort the array in place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

This problem is known as Dutch National Flag Problem. The idea is to attribute a color to each number and then arrange them following the order of colors on the Dutch flag.

We’ll use the integers 0, 1, and 2 to represent red, white, and blue, respectively.

Constraints#
Input numbers are restricted to 0, 1, or 2.
*/

let sortColors = function (arr){
    if (arr.length === 0) {
        return [];
    }
    return arr.sort(function (a, b) { return a- b});
}

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

let actual1 = sortColors([2, 0, 1]);
let expected1 = [0, 1, 2];

let actual2 = sortColors([2, 0, 2, 1, 1, 0]);
let expected2 = [0, 0, 1, 1, 2, 2];

let actual3 = sortColors([2, 0, 2, 1, 1, 0, 1, 0, 1, 0, 2]);
let expected3 = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2];

let actual4 = sortColors([0, 0, 0]);
let expected4 = [0, 0, 0];

let actual5 = sortColors([]);
let expected5 = [];

assertEqualsArray(actual1, expected1, 'sortColors');
assertEqualsArray(actual2, expected2, 'sortColors');
assertEqualsArray(actual3, expected3, 'sortColors');
assertEqualsArray(actual4, expected4, 'sortColors');
assertEqualsArray(actual5, expected5, 'sortColors');