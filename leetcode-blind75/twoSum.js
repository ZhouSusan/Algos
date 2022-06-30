/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        
        if (difference in hashMap) {
            result.push(hashMap[difference], i);
        }
        
        hashMap[nums[i]] = i;
    }
    return result;
};