/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.length < 1) {
        return 1;
    }
    
    let hashMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            hashMap.set(nums[i], true);
        }
    }
    
    let notIncluded = 1; 
    
    for (notIncluded; notIncluded <= nums.length; notIncluded++) {
        if (!hashMap.has(notIncluded)) {
            return notIncluded;
        }
    }
    return notIncluded;
};