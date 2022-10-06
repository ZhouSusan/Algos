/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        result += i - nums[i];
    }
    
    return result;
};

var missingNumber2 = function(nums) {

    let fullSet = new Set();
    
    for (let i = 0; i <= nums.length; i++) {
        fullSet.add(i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (fullSet.has(nums[i])) {
            fullSet.delete(nums[i]);
        }
    }
    
    let missingNumber = [...fullSet.values()][0];
    
    return missingNumber;
}