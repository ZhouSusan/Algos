/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = nums[0];
    let resultArr =[sum];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        resultArr.push(sum);
    }
    return resultArr;
};

//refactored 

var runningSum2 = function(nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        nums[i] = sum;
    }
    return nums;
};