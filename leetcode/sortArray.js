/**
 * @param {number[]} nums
 * @return {number[]}
 */

function partition(nums, start, end) {
    if (nums.length < 2) {
        return nums;
    }
    const pivotValue = nums[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > nums[i]) {
            swapIndex++
            if (i !== swapIndex) {
            // SWAP
            [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]]
            }
        }
    }
    if (swapIndex !== start) {
    // Swap pivot into correct place
    [nums[swapIndex], nums[start]] = [nums[start], nums[swapIndex]]
    }
    return swapIndex
}

const sortArray = function(nums, left=0, right=nums.length-1) {
    if (nums.length < 2) {
        return nums;
    }
    if (left >= right) {
        return;
    }
    
    let pivotIndex = partition(nums, left, right);
    
    //Left
    sortArray(nums, left, pivotIndex-1);
    
    //Right
    sortArray(nums, pivotIndex+1, right);
    
    return nums;
}