/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    let sum = 0;
    
    while (left != right) {
        sum = numbers[left] + numbers[right];
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left+1, right+ 1];
        }
    }
};

//python
def twoSum(self, numbers, target) {
    left = 0
    right = len(numbers-1)
    sum = 0

    while left != right:
        sum = numbers[left] + numbers[right]
        if (sum < target):
            right -= 1
        elif sum > target:
            left += 1
        else:
            return [left+1, right+1]

}
