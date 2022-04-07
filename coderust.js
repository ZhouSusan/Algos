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

/*Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a, e, i, o, u}, then return A.
If the first character in string s is in the set {b, c, d, f, g}, then return B.
If the first character in string s is in the set {h, j, k, l, m}, then return C.
If the first character in string s is in the set {n, p ,q,r, s, t, v, w, x, y, z}, then return D.*/

const getLetter = (s) => {
    let letter;

    switch(s[0]) {
        case ('a' || 'e' || 'i' || 'o' || 'u') :
            letter = 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g') :
            letter = 'B';
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm') :
            letter = 'C';
            break;
        case ('z' || 'p' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' ||'n') :
            letter = 'D';
            break;
    }
    return letter;
}

console.log(getLetter('adfgt'));