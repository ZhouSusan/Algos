/*We are given an array of integers, nums, sorted in ascending order, and an integer value, target. If the target exists in the array, return its index. If the target does not exist, then return -1.

The binary search divides the input array by half at every step. After every step, either we find the index we are looking for, or we discard half of the array.

Example#
Given the following sorted array, if the target’s value is 9, the binary search returns 2.*/

let binarySearch = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid = Math.floor( (start + (end - start))/2);
    while(start <= end) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

console.log(binarySearch([1, 3, 9, 10, 12], 9));