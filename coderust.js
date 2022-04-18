/*We are given an array of integers, nums, sorted in ascending order, and an integer value, target. If the target exists in the array, return its index. If the target does not exist, then return -1.

The binary search divides the input array by half at every step. After every step, either we find the index we are looking for, or we discard half of the array.

Example#
Given the following sorted array, if the target’s value is 9, the binary search returns 2.*/

let binarySearch = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid = Math.floor( (start + (end - start))/2);
    while(start <= end) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

let binarySearch2 = function(nums, target, start, end) {

    if (start > end) {
        return -1;
    }

    let mid = start + Math.floor((end - start)/2);
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] > target) {
        return binarySearch2(nums, target, start, (mid-1));
    } else {
        return binarySearch2(nums, target, (mid-1), end);
    }
};

//console.log(binarySearch([1, 3, 9, 10, 12], 9));
console.log(binarySearch2([1, 3, 9, 10, 12], 9));

/*Rotate an Array by 'n' Elements
We’re given an array of integers, nums. Rotate the array by n elements, where n is an integer:

For positive values of n, perform a right rotation.
For negative values of n, perform a left rotation.
Make sure we make changes to the original array.
*/

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

//We’re given a sorted integer array, nums and an integer value, target. The array is rotated by some arbitrary number. 
//Search the target in this array. If the target does not exist then return -1.

let binarySearchRotated = function(nums, target) {
    let low = 0;
    let high = nums.length-1;

    while (low <= high) {
        let middle = low + Math.floor((high-low)/2);
        if (nums[middle] === target) {
            return middle;
        } 
        if (nums[low] <= nums[middle]) {
            if (nums[low] <= target && target < nums[middle]) {
                high = middle - 1;
            } else {
                low = middle + 1;
            }
        } else {
            if (nums[middle] < target && target <= nums[high]) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
    }
    return -1;
};

let nums = [6, 7, 1, 2, 3, 4, 5]
let target = 2;
//expected - 4
console.log(binarySearchRotated(nums, target));

/*We’re given three integer arrays, each sorted in ascending order.
Return the smallest number common in all three arrays. In case no number is common, return -1.*/

let findLeastCommonNumber = function(arr1, arr2, arr3) {
    let array = arr1.concat(arr2).concat(arr3)
    let numberObj = {};
    for (let i = 0; i < array.length; i++) {
        if (numberObj.hasOwnProperty(array[i])) {
            numberObj[array[i]]++;
        } else {
            numberObj[array[i]] = 1;
        }
    }
    let commonSmallesNum = -1; 
    for (let key in numberObj) {
    if (numberObj[key] === 3) {
        commonSmallesNum = parseInt(key);
        break;
    }
    }
    return commonSmallesNum;
};

const findLeastCommonNumber2 = (v1, v2, v3) => {
    let [i, j, k] = [0, 0, 0];

    while (i < v1.length && j < v2.length && k < v3.length) {
        if (v1[i] === v2[j] && v2[j] === v3[k]) {
            return v1[i];
        }

         //increment the iterator
        if (v1[i] <= v2[j] && v1[i] <= v3[k]) {
            i++;
        } else if (v2[j] <= v1[i] && v2[j] <= v3[k]) {
            j++;
        } else if (v3[k] <= v1[i] && v3[k] <= v2[j]) {
            k++
        }
    }
    return -1;
}

v1 = [6, 7, 10, 25, 30, 63, 64]
v2 = [0, 4, 5, 6, 7, 8, 50]
v3 = [1, 6, 10, 14]

console.log(findLeastCommonNumber2(v1, v2, v3));

//  We’re given a sorted array of integers, nums, and an integer value, target. Return the low and high index of the given target element. 
//If the indexes are not found, return -1.

let findLowIndex = function(arr, key) {
  if (arr.indexOf(key) > -1) {
    return arr.indexOf(key);
  }
  return -1;
};

let findHighIndex = function(arr, key) {
  if (arr.indexOf(key) > -1) {
    return arr.lastIndexOf(key);
  }
  return -1;
};

console.log(findLowIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5));
console.log(findHighIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5));

let findLowIndex2 = function(arr, key) {
    let low = 0;
    let high = arr.length-1;

    let mid = Math.floor(high/2);
    while (low <= high) {
        if(arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        mid = low + Math.floor((high-low)/2);
    }

    if (low < arr.length && arr[low] === key) {
        return low;
    }
    return -1;
  };
  
  let findHighIndex2 = function(arr, key) {
    let low = 0;
    let high = arr.length-1;
    let mid = Math.floor(high/2); 

    while (low <= high) {
        if (arr[mid] <= key) {
            low = mid + 1; 
        } else {
            high = mid - 1
        }

        mid = low + Math.floor((high-low)/2);

        if (high === -1) {
            return high;
        }

        if (high < arr.length && arr[high] === key) {
            return high;
        }
    }
    return -1;
  };

console.log(findLowIndex2([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 2), 
findHighIndex2([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 2));

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