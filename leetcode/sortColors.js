/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
    
    The Dutch National Flag Problem 

    1. array[0 to low-1] = 0 is present
    2. array[low to mid-1] = 1 is present
    3. array[mid to high-1] = unknown
    4. array [ high to n (size of array)] = 2 is present
 */

var sortColors = function(nums) {
    let swap = (i,j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    let low = 0;
    let mid = 0;//pointer
    let high = nums.length-1;
    
    while (mid <= high) {
        if (nums[mid] < 1) {
            swap(low, mid);
            low += 1;
            mid += 1;
        } else if (nums[mid] == 1) {
            mid += 1;
        } else {
            swap(mid, high);
            high -=1;
        }
    }
};