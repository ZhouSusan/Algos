/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    let hashMap = new Map();
    let arr = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i])+1);
        } else {
            hashMap.set(nums[i], 1);
        }
    }
    
    for (const [key, value] of hashMap ) {
        arr.push([key, value]);
    }
    
    arr.sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0])
    }
    
    return result;
};