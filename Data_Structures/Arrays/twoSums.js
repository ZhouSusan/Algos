/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let result = [];
   for (let i = 0; i < nums.length; i++) {
       for (let y = i+1; y < nums.length; y++) {
           if (nums[i] + nums[y] === target) {
               result.push(i, y);
               return result;
           }
       }
   }
};