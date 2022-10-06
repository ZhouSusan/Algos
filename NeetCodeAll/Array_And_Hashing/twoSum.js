/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let numsDict = {};
    
    for (let i = 0; i < nums.length; i++) {
        
        let difference = target - nums[i];
        
        if (difference in numsDict) {
            return [numsDict[difference], i];
        } 
        
        numsDict[nums[i]] = i;
    }

};