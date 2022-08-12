/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
    let numsStrArr = [];
    
    for (let i = 0; i < nums.length; i++) {
        numsStrArr.push(nums[i].toString());
    }
    let compareStrings = (a, b) => `${b}${a}` - `${a}${b}`;
    
    let largestNum = numsStrArr.sort(compareStrings);
    
    if (largestNum[0] == '0') {
        return '0';
    } else {
        return largestNum.join('');
    }
};