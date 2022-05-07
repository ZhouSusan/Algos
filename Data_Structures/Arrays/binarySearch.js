let binarySearch = function(nums, target) {
    if (nums.length === 0) {
        return -1; 
    }

    let start = 0;
    let end = nums.length-1;

    while (start <= end) {
        let mid = Math.floor((end-start)/2) + start;
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};