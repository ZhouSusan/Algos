/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];//there is always going to be a num 
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        //we are going to remove negative prefix as we computed the         totally sum 
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += nums[i];
        //updating the maxSub
        maxSub = Math.max(maxSub, currentSum)
    }
    return maxSub;
};