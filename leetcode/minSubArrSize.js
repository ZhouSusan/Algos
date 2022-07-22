/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    //initialize result to a max number
    let result = Number.MAX_VALUE;
    
    let left= 0;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        while (sum >= target) {
            let currentSubArrSize = (i+1) - left;
            result = Math.min(result, currentSubArrSize);
            sum -= nums[left];
            left += 1;
        }
    }
    return result != Number.MAX_VALUE ? result : 0;
};