/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (nums.length == 1) {
        return nums;
    }
    
    let result = [];
    let hashMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i])+1);
            if (hashMap.get(nums[i]) >= k) {
                result.push(nums[i]);
            }
        } else {
            hashMap.set(nums[i], 1);
        }
    }
    
    const unqiueNums = result.filter((x, i , a) => a.indexOf(x) ==i);
    return unqiueNums;
};