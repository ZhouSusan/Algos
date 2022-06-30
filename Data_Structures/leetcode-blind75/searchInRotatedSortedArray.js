/**
 * @param {number[]} nums- sorted array 
 * @param {number} target - number
 * @return {number} - index/ -1
 * 
 *  constriants:
    1 <= nums.length <= 5000
    -104 <= nums[i] <= 10^4
    All values of nums are unique.
    nums is an ascending array that is possibly rotated.
    -10^4 <= target <= 10^4
 */
let search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid;

    while (start <= end) {
        let mid = start + Math.floor(end-start/2);

        if (nums[mid] == target) {
            return mid;
        }
        //checking if the value at start is less or equal the value of the mid index 
        if (nums[start] <= nums[end]) {
            //checking if the the value at start is less or equal to the target, and if the target is less than the value at mid
            //if yes, the move the pointer end to the left of the mid, else move the start pointer to the right of mid
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
            //checking the elements to the right of the array
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1; 
};

//test cases 
console.log(
    search([1], 9),//-1
    search ([3, 12], 3),//0
    search([2, 4, 6, 8, 10, -3, -2, 0], -3),//5
    search([5, 6, 7, 8, 9, 0, 1, 2, 4], 3)//-1
)