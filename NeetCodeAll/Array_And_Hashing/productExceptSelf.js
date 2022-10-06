/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var resultArr = [];
    
    let product = 1; 
    for (let i = 0; i < nums.length; i++) {
        resultArr[i] = product;
        product *= nums[i];
    }
    
    product = 1;
    for (let j = nums.length-1; j >= 0; j--) {
        resultArr[j] *= product;
        product *= nums[j];
    }
    
    return resultArr;
};