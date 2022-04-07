//Create a function that prints/logs all the integers from 1 to 20.
function print1to20(){
    for (let i = 1; i < 21; i++) {
        console.log(i);
    }
}
print1to20();

//Create a function that prints/logs all the odd numbers from 3 to 20.
function printOdd3to20(){
    for (let i = 3; i <= 20; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
printOdd3to20();

//Create a function that prints/logs all the even numbers from 4 to 22.
function printEven4to22() {
    for (let i = 4; i <= 22; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEven4to22();

//Print/log all the multiples of 7 between the numbers 7 to 62.
function multiplesOf7(){
    for (let i = 7; i <= 62; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}
multiplesOf7();

//Log positive numbers starting at 50, counting down by fives (exclude 0).
function countdownByFives(){
    for (let i = 50; i > 0; i--) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}
countdownByFives();

/*Given an array, print/log the sum of the first value in the array, plus the array’s length. 
Assume that the array is composed of numbers.*/ 
function firstPlusLength(arr){
    console.log(arr[0] + arr.length);
}
firstPlusLength([1,2,5]);
firstPlusLength([3,0,2,5]);
firstPlusLength([-5,0,2,5]);
firstPlusLength([1]);

/*Create a function that prints/logs all the even numbers from 4 to 22.
Have it also return the sum of all the numbers that were printed.*/
function printEven4to22(){
    let sum = 0; 
    for (let i = 4; i < 23; i++) {
        if (i % 2 === 0) {
            sum += i;
            console.log(i);
        }
    } 
    return sum;    
}
console.log(printEven4to22());

//Add odd integers from -25,000 to 30,000 and have the function return its final sum. 
function addOddInts() {
    let sum  = 0;
    for (let i = -25000; i <= 30000; i++) {
        if (i %2==1 || i % 2 == -1) {
            sum += i;
        } 
    }
    return sum;
}
console.log(addOddInts());

//Given an array, write a function that prints/logs each number in the array.
function printArray(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray([1,3,5]);
printArray([-1,3,-5]);
printArray([1,2, 3,4,5]);

/*Given an array, write a function that only prints/logs its positive value.
For example, printPositives([-1,3,-5, 10]) prints/logs 3, 10.*/

function printPositives(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(arr[i]);
        }
    }
}
printPositives([-1,3,-5,10]);
printPositives([-1,3,-5]);
printPositives([-1,10,15]);

/*Given an array, write a function that prints the index value of its positive values.
For example, printPositiveIndex([1, 3, -10]), have it print/log 0, 1 
(as the 0th index had a positive value and index 1 also had a positive value).
printPostiiveIndex([10, 5, -5, 15]) should print/log 0, 1, and 3. 
In other words, it prints the index of each positive number in the array.*/

function printPositiveIndex(arr){
    for (let i =0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(i);
        }
    }
}
printPositiveIndex([1, 3, -10]);
printPositiveIndex([10, 5, -5, 15]);
printPositiveIndex([10, 5, 5, 15]);

/*Given an array, write a function that returns a new array where
each negative value was converted to a positive value.
For example, bePositive([-1,-3,-5]) returns [1, 3, 5]. 
A positive number in the original array should remain as positive, 
so that each number in the new array is all positive.*/
function bePositive(arr){
    let positveArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            positveArr.push(Math.abs(arr[i]));
        } else {
            positveArr.push(arr[i]);
        }
    }
    return positveArr;
}

/*Given an array with multiple values, write a function that replaces each value in the array
with the product of the original value multiplied by itself.
For example, squareVal( [1, 3, 5] ) should return [1, 9, 25].*/

function squareVal(arr){
    return arr.map(x => x**2);
}

/*Given an array with multiple values, write a function that replaces any negative numbers 
within the array with the value of 0.
When the program is done the array should contain no negative values. 
(e.g. [1,5,10,-2] will become [1,5,10,0]) */

function noNeg(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

/*Given an array of multiple values, write a function that returns the sum of its numbers.
For example, findSum([1,2,3]) should return 6.*/

function findSum(arr){
    const intialSum = 0;
    const sum = arr.reduce((preVal, currentVal) => preVal + currentVal, intialSum);
    return sum;
}

/*Given an array with multiple values, write a function that returns the maximum number in the array.
For example, findMax([-3,3,5,7]) should return 7. */

function findMax(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a -b;
    })
    return sortedArr[sortedArr.length-1];
}

/*Given an array with multiple values, write a function that returns the minimum value in the array.
For example findMin([0,3,-5]) should return -5.*/

function findMin(arr){
    let sortedArr = arr.sort((a, b) => {
        return a -b;
    })
    return sortedArr[0];
}

/* Given an array with multiple values, write a function that returns a new array with two elements. 
The first value in the new array should be the minimum value in the original array. 
The second value in the new array should be the maximum value in the original array.
For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10].*/

function findMinMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

/*Given array of numbers, create function to replace last value with number of positive values.
Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.*/

function countPositives(arr){ 
    let postiveNum = arr.filter(x => x > 0);
    arr[arr.length-1] = postiveNum.length;
    return arr;
}

/*Given an array, write a function that prints values that are greater than its 2nd value in the array.
For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13. Assume that the array has at least 2 values.
Have the function also return the sum of the numbers that were printed/logged. */

function valGreaterThanSecond(arr) {
    let sum = 0;
    for (let i = 2; i < arr.length; i++) {
        if(arr[i] > arr[1]) {
            console.log(arr[i]);
            sum += arr[i];
        }
    }
    return sum;
}

/*Given two numbers passed to the function, return a new array of length num1 with each value num2.
For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].*/

function thisLengthThatValue(num1, num2){
    let resultArr = [];
    let i = 0;
    while (i < num1) {
        resultArr.push(num2);
        i++;
    }
    return resultArr;
}

/*Build function that accepts array. Return a new array with all values except first, adding 7 to each.
Do not alter the original array.
For example, addSevenToMost([1,3,5]) should return [10, 12]. 
addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].*/

function addSevenToMost(arr){
    return arr.slice(1).map(x => x+7);
}

/*Write a function that accepts any array, and returns a new array
 with the array values that are greater than its 2nd value. 
If the array that was passed to the function has less than two elements, have the function return false.
For example, greaterThanSecond([1,3,5,7]) should return [5, 7]. 
Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. Also, greaterThanSecond([2]) should return false.*/

function greaterThanSecond(arr){
    if (arr.length < 2) {
        return false;
    } 

    let resultArr = [];
    let secondVal = arr[1];
    for  (let i = 0; i < arr.length; i++) {
        if (i === 1) {
            continue;
        }
        if (arr[i] > secondVal) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}

/*Write a function that will swap the first and last values in any given array. 
The default minimum length of the array is 2.
For example, swapFirstLast([1,3,5]) should return [5, 3, 1].
swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1].*/

function swapFirstLast(arr){
    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    return arr;
}

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

/*Return the second largest number in the array.
@param {Number[]} nums - An array of numbers.
@return {Number} The second largest number in the array.
*/
function getSecondLargest(nums) {
    let uniqueNums = [...new Set(nums)];
    let sortedNums =  uniqueNums.sort((a, b) => {return b - a});
    return sortedNums[1];
}
