/**
 * @param {number[]} nums
 * @return {boolean}

    //Approach:
    -loop over the array starting at the last element of array, to see if we can reach our goal and then decement with each iteration 
    -if the element one left of the current element is greater or equal to one, the we move to the next iteration
    -else- if any point we do not reach the 0 index, and the goal is greater than the jump length's -> return false
    -if we are able to reach index 0, then we have reach out goal 
*/
var canJump = function(nums) {
    let goal = nums.length - 1;
    for (let i = nums.length-1; i >= 0; i--) {
        //nums[i] + i refers to the jump length
        //if we are able to reach the goals, then we shift that to goal(current index we are jumping from right now); 
        if ((nums[i] + i) >= goal) {
            goal = i; 
        }
    }
    return goal == 0 ? true : false; 
};