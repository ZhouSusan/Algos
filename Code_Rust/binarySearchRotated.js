//We’re given a sorted integer array, nums and an integer value, target. The array is rotated by some arbitrary number. 
//Search the target in this array. If the target does not exist then return -1.

let binarySearchRotated = function(nums, target) {
    let low = 0;
    let high = nums.length-1;

    while (low <= high) {
        let middle = low + Math.floor((high-low)/2);
        if (nums[middle] === target) {
            return middle;
        } 
        if (nums[low] <= nums[middle]) {
            if (nums[low] <= target && target < nums[middle]) {
                high = middle - 1;
            } else {
                low = middle + 1;
            }
        } else {
            if (nums[middle] < target && target <= nums[high]) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
    }
    return -1;
};

let nums = [6, 7, 1, 2, 3, 4, 5]
let target = 2;
//expected - 4
console.log(binarySearchRotated(nums, target));