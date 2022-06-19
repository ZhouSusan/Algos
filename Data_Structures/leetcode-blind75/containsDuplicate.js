/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    let numsMap = {};
    
    for(let i = 0; i < nums.length; i++) {
        if (numsMap.hasOwnProperty(nums[i])) {
            numsMap[nums[i]] += 1;
        } else {
            numsMap[nums[i]] = 1;
        }
    }
    
    for (let key in numsMap) {
        if(numsMap[key] >= 2) {
            return true;
        }
    }
    
    return false;
};