/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    console.log(firstInteger+ parseInt(secondInteger));
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    console.log(firstDecimal+parseFloat(secondDecimal));
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
    
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels= ['a', 'e', 'i', 'o', 'u'];
    let resultStr = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            resultStr += s[i];
            console.log(s[i]);
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (vowels.includes(s[j])) {
            continue;
        }
        resultStr += s[j];
        console.log(s[j]);
    }
}

/*Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. 
Recall that the English vowels are a, e, i, o, and u.
String  consists of lowercase letters only (i.e., [a-z]).*/
function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    
    /*
     * Do not remove the return statement
     */
    let re = RegExp(/^([aeiou]).*\1$/);;
    return re;
}


/**
 * Complete the following functions in the editor below:
getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor.
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    perimeter = (2*length) + (2*width);
    return perimeter;
}

/*
 * Create the function factorial here
 */

function factorial(num) {
    let i = 1;
    let total = 1;
    while(i < num) {
        total *= num;
        num--;
    }
    return total;
}   

function main(input) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = input;
    const PI = 3.141592653589793;
    // Print the area of the circle:
    const area  = (r**2) * PI;
    console.log(area);
    // Print the perimeter of the circle:
    const perimeter = 2 * r * PI;
    console.log(perimeter);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = radius;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main(2.6);
main(5);

/**Complete the getGrade(score) function in the editor. It has one parameter: an integer, score,
 *  denoting the number of points Julia earned on an exam. 
 * It must return the letter corresponding to her grade according to the following rules:*/

 function getGrade(score) {
    let grade;
    // Write your code here
    if (score <= 30 && score > 25) {
        grade = 'A';
    } else if (score <= 25 && score > 20) {
        grade = 'B';
    }
    else if (score <= 20 && score > 15) {
        grade = 'C';
    }
    else if (score <= 15 && score > 10) {
        grade = 'D';
    } else if (score <= 10 && score > 5) {
        grade = 'E';
    } else if (score <= 5 && score > 0) {
        grade = 'F';
    }
    return grade;
}