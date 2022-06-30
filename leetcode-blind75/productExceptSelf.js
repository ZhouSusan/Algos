/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let output = [];
    let product = 1; 
    
    for (let i = 0; i < nums.length; i++) {
        output[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (var j = nums.length-1; j >= 0; j--) {
        output[j] *= product;
        product *= nums[j];
    } 
    return output; 
};