/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    left = binarySearch(nums, target, true);
    right = binarySearch(nums, target, false);
    return [left, right];
};

var binarySearch = function (nums, target, leftStatus) {
    let left = 0;
    let right = nums.length-1;
    let i = -1;
        
    while (left <= right) {
        let mid = left + Math.floor((right-left)/2);
        
        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right =mid - 1;
        } else {
            i = mid;
            if (leftStatus) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return i;
};