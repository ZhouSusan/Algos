/*Create a function sum() that returns the sum of the two numbers passed as its arguments.
For example, sum(2,5) should return 7; sum(3,10) should return 13.*/

function sum(num1, num2){
    return num1 + num2;
}

//Log positive numbers starting at 2019, counting down by 8.

function CountDownBy8(){
    for (let i = 2019; i > 0; i-= 8) {
        console.log(i);
    }    
}

CountDownBy8();

/* 
Kelvin wants to convert between temperature scales. Create celciusToFahrenheit(cDegrees) 
that accepts a number of degrees in Celcius, and returns the equivalent temperature as expressed in Fahrenheit degrees. 
For review, Fahrenheit = (9/5 * Celsius) + 32.
*/

function celciusToFahrenheit(cDegrees) {
    return ((9/5) * cDegrees) + 32;
}

console.log(celciusToFahrenheit(32));

/*
Given an array, write a function that changes all positive numbers in the array to “big”.
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
*/

function makeItBig(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
        }
    }
    return arr;
}    

/*
Given array, create a function to return a new array where each value in the original has been doubled. 
Calling double([1,2,3]) should return [2,4,6].
*/

function double(arr){
    return arr.map(x => x*2);
}

console.log(double([-2, 0, 2]));

/*
Given an array and a value Y, count and return the number of array values greater than Y.
For example, returnArrayCountGreaterThanY( [2,3,5], 4) 
should return 1 as there is only one element in the array whose value is greater than 4.
*/

function returnArrayCountGreaterThanY(arr, y){
    return arr.filter(x => x > y).length;
}

/*
Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).
Ex.:sigma(3)=6(or1 + 2 + 3); sigma(5)=15(or1 + 2 + 3 + 4 + 5).
*/

function sigma(num){
    let sum = 0;
    while (num > 0) {
        sum += num;
        num--;
    }
    return sum;
}

console.log(sigma(6));

/*
Given array, swap first and last, second and second-to-last, third and third-to- last, etc.
Have the function return this swapped array.
For example swapTowardCenter([true,42,"Ada",2,"pizza"]) should return ["pizza",2,"Ada",42,true]. 
Passing [1,2,3,4,5,6] should return [6,5,4,3,2,1].
*/

function swapTowardCenter(arr){
    let i = 0; 
    let j = arr.length-1;

    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
        i++;
        j--;
    }

return arr;
}

/*
Create threesFives(n) that adds values from 1 and n (inclusive) if that value is not divisible by 3 or 5. Return the final sum.
For example, threesFives(10) returns 22 as it only returns the sum of 1, 2, 4, 7, and 8. 
On that example, it skips 3, 6, 9 as those are divisible by 3. It also skips 5, and 10 as it's divisible by 5.
*/

function threesFives(num){
    let sum = 0;
 
    while (num > 0) {

        if (num % 3 === 0 || num % 5 === 0) {
            num--;
            continue;
        }
        sum += num;
        num--;

    }
    console.log(sum);
    return sum;
}
console.log(threesFives(10))

/*
Create a function to generate Fibonacci numbers. 
In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. 
Your function should accept one argument, an index into the sequence 
(where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
*/

function fibonacci(index){
    if (index === 0) {
        return 0;
    }
    if (index <= 2) {
        return 1;
    }
    return fibonacci(index - 2) +  fibonacci(index - 1)
}

/*
Kaitlin sees beauty in numbers, but also believes that less is more. 
Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. 
Return that one-digit result.
Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
Solve the challenge WITHOUT using recursion although you are allowed to convert the integer to a string.
*/

function sumToOne(num) {
    if (num.toString().length <= 2) {
        return parseInt(num.toString()[0]) + parseInt(num.toString()[1]);
    }
    
    let total = 0;
    let sum = 0;
    let final = 0;
    let numStr = num.toString();
    
    for (let i= 0; i < numStr.length; i++) {
        total += parseInt(numStr[i]);
    }

    if (total.toString().length > 1) {
        for (let j = 0; j < total.toString().length; j++) {
            console.log(total.toString()[j]);
            sum += parseInt(total.toString()[j]);
        }
    } 

    if (sum.toString().length > 1) {
        for (let j = 0; j < sum.toString().length; j++) {
            console.log(sum.toString()[j]);
            final += parseInt(sum.toString()[j]);
        }
        return final;
    } else {
        return sum;
    }
}


const sumToOne2 = (num) => {
    let numString = num.toString();
    let sum;

    do {
        sum = 0;
        for (let i = 0; i < numString.length; i++) {
            sum += parseInt(numString[i]);
        }
        numString = sum.toString();
    } while (sum >= 10) {
        return sum;
    }
}

console.log(
sumToOne2(35),
sumToOne2(928),
sumToOne2(5798),
sumToOne2(35798))

/*
Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. 
Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. 
Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, returns angles (in degrees) of the hour, minute and second hands. 
As review, 360 degrees form a full rotation.
 Have the degree round up as a whole number (e.g. 38 instead of 37.632...)

For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" meaning the hour is 30 degrees, 
the minute and the second is 0 degree from noon.

Similarly, clockHandAngles(10800) should return [90, 0, 0] as 10,800 seconds is equivalent to 3:00:00.
*/

function clockHandAngles(seconds) {
    let counts = [0, 0, 0, seconds];
    let clockInfo = [3600, 60, 1];
    //scaling factor to convert from units (minutes, seconds, etc) to degrees,
    let scaling = [30, 6, 6]; 

    for (let i = 0; i < 3; i++) {
        counts[i] = Math.ceil(counts[3]/clockInfo[i] * scaling[i] % 360);
        counts[3] -= Math.floor(counts[i]/scaling[i]) * clockInfo[i];
    }

return [counts[0], counts[1], counts[2]];
    
}

//Refactor clockHandAngles
const clockHandAngles2 = (seconds) => {
    let hour_hand = seconds/ 3600 % 12;
    let minute_hand = seconds/60 % 60;
    let second_hand = seconds % 60;

    //apply a scaling factor to convert from units (minutes, seconds, etc) to degrees, and finally limit each value to 360 degrees.
    let clock_hands = [Math.ceil(hour_hand*30), Math.ceil(minute_hand*6), Math.ceil(second_hand*6)];
    return clock_hands;
} 

console.log(clockHandAngles2(10800));
console.log(clockHandAngles2(5000));

function isPrime(num){
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(
    isPrime(3), 
    isPrime(4),
    isPrime(13),
    isPrime(65),
    isPrime(17))

/*
Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit.
0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (1234.56,-1), return 5.
 */    

function extractDigit(num,digitNum){
    if (digitNum <= 0) {

        let numArr = num.toString().split('.');
        console.log(numArr[0][numArr[0].length-1]);
        if (digitNum === 0) {
            return numArr[0][numArr[0].length-1];
        }
        return numArr[1][Math.abs(digitNum) - 1];
    } else {
    
    if (digitNum === 0) {
        return num.toString()[num.toString().length-1];
    }
    return num.toString()[digitNum-1];
    }
}

/**
input: arr - array 
output: arr - array
constraints: do not use built-in functions, do not create an additional array/ objects
edge case: if the array is empty or less than 2 values, return the array || if the input is not an array, return []

 */

function reverse(arr){
    
    let i = 0; 
    let j = arr.length-1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

console.log(reverse([1,3,5]));
console.log(reverse([-1, 3, -5]));
console.log(reverse([1, 2, 3, 4, 5])); 
console.log(reverse([2, 10, 13, 15]));