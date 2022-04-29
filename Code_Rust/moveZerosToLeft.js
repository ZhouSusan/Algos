/*We’re given an integer array, nums. 
Move all zeroes if any to the left while maintaining the order of other elements in the array.*/

let moveZerosToLeft = function(nums) {
 
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === 0) {
           nums.splice(i, 1);
           nums.unshift(0);
       } 
     }
     console.log(nums);
     return nums;
 };

console.log(moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]));

// let moveZerosToLeft2 = function(nums) {
//     if (nums.length < 1) {
//         return nums;
//     }

//     let lengthNums = nums.length;

//     //initialize the two pointers
//     let writeIndex = length - 1;
//     let readIndex = length - 1;

//     while (readIndex >= 0) {

//     }
// }