/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    
    let numOccurences = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (numOccurences.has(nums[i])) {
            numOccurences.set(nums[i], numOccurences.get(nums[i]) + 1);
        } else {
            numOccurences.set(nums[i], 1);
        }
    };
    
    let singleNum = null;
    for (const [key, value] of numOccurences) {
        if (value == 1) {
            singleNum = key;
        }
    }
    
    return singleNum;
};