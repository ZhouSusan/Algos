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