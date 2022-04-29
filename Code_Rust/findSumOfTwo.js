//We’re given an array of integers and a value. Determine if there are any two integers in the array whose sum is equal to the given value. 
//Return true if the sum exists; otherwise, return false.

let findSumOfTwo = function(nums, val) {

    if (!nums || nums.length < 2) {
     return false;
   }
  
    let pairFound = new Set();
   
  
    for (let elem in nums) {
      if (pairFound.has(val - nums[elem])) {
        return true;
      }
  
       pairFound.add(nums[elem]);
    }
     console.log( pairFound);
    return false;
  };