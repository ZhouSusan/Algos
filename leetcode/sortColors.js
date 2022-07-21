/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    let swap = (i,j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    let zero = 0;
    let one = 0;
    let two = nums.length-1;
    
    while (one <= two) {
        if (nums[one] < 1) {
            swap(zero, one);
            zero += 1;
            one += 1;
        } else if (nums[one] == 1) {
            one += 1;
        } else {
            swap(one, two);
            two -=1;
        }
    }
};