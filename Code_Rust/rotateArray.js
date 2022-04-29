let rotateArray = function(nums, n) {
    if (n === 0) {
        return nums;
    }
    
    if (n < 0) {
        while (n < 0) {
            let temp = nums.shift();
            nums.push(temp);
            n++;
        }
    } else if (n > 0) {
        while (n > 0) {
            let temp = nums.pop();
            nums.unshift(temp);
            n--;
        }
    }

    return nums;
};

console.log(rotateArray([-1,-100,3,99], 2));
let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
console.log(rotateArray(arr, -3))