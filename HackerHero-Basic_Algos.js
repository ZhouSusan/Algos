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
